import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISite } from '../Shared/site.interface';
import { PasswordManagerService } from '../password-manager.service';
import { IPassword } from '../Shared/password.interface';
import {AES, enc} from 'crypto-js'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.css']
})
export class PasswordListComponent implements OnInit {

  
sitename!: string;
siteUrl!: string;
siteImg!: string;
siteId!: string;

passwordList: IPassword[] =[];
isEdit: boolean = false;
passwordId!: string;

messsageResponse!: string;

email!: string;
username!: string;
password!: string

  constructor(
    private router: ActivatedRoute,
    private passwordMService: PasswordManagerService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  
    this.router.queryParams.subscribe(params =>{
      this.sitename = params['name'];
      this.siteUrl = params['siteUrl'];
      this.siteImg = params['siteImg'];
      this.siteId = params['siteId']
    })
  
    this.fetchPassword();
   
  }
  onSubmit(data: IPassword){


    if(this.isEdit){
      this.passwordMService.updatePassword(this.passwordId, {email: data.email, username: data.username, password: this.encryptPassword(data.password)}).subscribe({
        next:(res)=>{
          this.messsageResponse = res.message
          this.toastr.success(this.messsageResponse)
        },
        error:(err)=>{
          console.log(err);
        },
        complete:()=>{
            this.email = "",
            this.username = "",
            this.password = ""
            this.fetchPassword();
            this.isEdit = false
        }
      
      })

    }else{
      this.passwordMService.addPassword(this.siteId, {email: data.email, username: data.username, password: this.encryptPassword(data.password)}).subscribe({
        next:(res)=>{
          this.messsageResponse = res.message
          this.toastr.success(this.messsageResponse)
        },
        error:(err)=>{
          console.log(err);
        },
        complete:()=>{
            this.email = "",
            this.username = "",
            this.password = ""
            this.fetchPassword();
        }
      
      })
    }
    
      
  }
 

  fetchPassword(){
    this.passwordMService.getAllPasswordBySite(this.siteId).subscribe({
      next:(res)=>{
          this.passwordList = res
          
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
         
      }
    })
  }

  encryptPassword(password: string){
    const secretKey = 'l0M)Vw+4MuG`^i`:q~b08sCTqvfQii';
    return AES.encrypt(password, secretKey).toString();
  };

  decryptPassword(password: string){
    const secretKey = 'l0M)Vw+4MuG`^i`:q~b08sCTqvfQii';
   const decryptedPassword = AES.decrypt(password, secretKey).toString(enc.Utf8);
   console.log(decryptedPassword);
   return decryptedPassword;

  }

  onDecrypt(password: string, i: number){
     const decpassword = this.decryptPassword(password);
     this.passwordList[i].password = decpassword
  }

  onDelete(passwordId?: string){
      this.passwordMService.deletePassword(passwordId as string).subscribe({
        next: (res)=>{
          this.messsageResponse = res.message
          this.toastr.success(this.messsageResponse)
        },
        error:(err)=>{
          console.log(err);
        },
        complete:()=>{
          this.fetchPassword();
        }
      })
  };

  onEdit(passwordItem: IPassword){
    this.email = passwordItem.email;
    this.username = passwordItem.username;
    this.password = this.decryptPassword(passwordItem.password);
    this.passwordId = passwordItem._id as string;

    this.isEdit = true
  }
}
