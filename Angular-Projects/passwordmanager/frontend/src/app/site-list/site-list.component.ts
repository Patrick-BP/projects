import { Component, OnInit } from '@angular/core';
import { PasswordManagerService } from '../password-manager.service';
import { ISite } from '../Shared/site.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent implements OnInit {

  messageResponse!: string

  siteName!: string;
  siteUrl!: string;
  siteImgURL!: string;
  constructor(private toastr: ToastrService, private PasswordMService: PasswordManagerService) { }


  ngOnInit(): void {
  }

  onSubmit(values: Object){
    console.log(values);
      this.PasswordMService.addSite(values as ISite).subscribe({
        next:(res)=>{
          this.messageResponse = res.message;
          this.toastr.success(this.messageResponse)
        },
        error:(error)=>{
          this.messageResponse = 'Add site Failed';
          this.toastr.error(this.messageResponse)
        },
        complete:()=>{
          this.siteName = " ";
          this.siteUrl = " ";
          this.siteImgURL = " "
        }
      })
  }

}
