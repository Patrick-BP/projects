import { Component, OnInit } from '@angular/core';
import { IUser } from '../Shared/user.interface';
import { PasswordManagerService } from '../password-manager.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hasAccount: boolean = true
  messageReponse!: string;
  loggedInUser!: IUser

  constructor(
    private passwordService: PasswordManagerService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }


  onSubmit(credentials: IUser){
    this.passwordService.login(credentials).subscribe({
      next:(res)=>{
          this.messageReponse = res.message;
          this.toastr.success(this.messageReponse);
          this.loggedInUser = res.data
      },
      error:(err)=>{
        this.messageReponse = err.error.message;
          this.toastr.error(this.messageReponse)
      },
      complete:()=>{
        localStorage.setItem('user', JSON.stringify(this.loggedInUser))
        this.router.navigate(['/site-list'])
      }
    })
  }
  signUp(){
    this.hasAccount = !this.hasAccount
  }
  onSignUp(user: IUser){
    console.log(user);
      this.passwordService.addUser(user).subscribe({
        next:(res)=>{
          this.messageReponse = res.message;
          this.toastr.success(this.messageReponse)
        },
        error:(err)=>{
          this.messageReponse = err.error.message;
          this.toastr.error(this.messageReponse)
        },
        complete:()=>{
          this.hasAccount = true
        }
      })
  }
}
