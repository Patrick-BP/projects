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

  messageResponse!: string;
  sitesList!: Array<ISite>;
  isEdit: boolean = false
  isAddFormShown: boolean = false;
  siteId!: string;
  isToastrShown: boolean = false

  siteName!: string;
  siteUrl!: string;
  siteImgURL!: string;


  constructor(private toastr: ToastrService, private passwordMService: PasswordManagerService) { }


  ngOnInit(): void {
    this.fetchSites();
  }

  fetchSites(){
    this.passwordMService.getAllSites().subscribe({
      next:(res)=>{
        this.sitesList = res
      }
    })
  }

  onSubmit(values: Object){
   
      if(this.isEdit){
        this.passwordMService.updateSite(this.siteId, values as ISite).subscribe({
          next:(res)=>{
            this.messageResponse = res.message;
            this.toastr.success(this.messageResponse)
          },
          error:(error)=>{
            this.messageResponse = 'update site Failed';
            this.toastr.error(this.messageResponse)
          },
          complete:()=>{
            this.isToastrShown = true
            this.fetchSites();
            this.siteName = " ";
            this.siteUrl = " ";
            this.siteImgURL = " ";
            this.isAddFormShown = false
          const timer = setTimeout(()=>this.isToastrShown = false, 4000);
          }
        })

      }else{
        this.passwordMService.addSite(values as ISite).subscribe({
          next:(res)=>{
            this.messageResponse = res.message;
            this.toastr.success(this.messageResponse)
          },
          error:(error)=>{
            this.messageResponse = 'Add site Failed';
            this.toastr.error(this.messageResponse)
          },
          complete:()=>{
            this.isToastrShown = true
            this.fetchSites();
            this.siteName = " ";
            this.siteUrl = " ";
            this.siteImgURL = " ";
            this.isAddFormShown = false
            const timer = setTimeout(()=>this.isToastrShown = false, 4000);
          }
        })
      }
  }


  editSite(site: ISite){
    this.siteId = site._id as string
    this.isAddFormShown = !this.isAddFormShown;
    this.isEdit = true
    this.siteName = site.siteName;
    this.siteUrl = site.siteUrl;
    this.siteImgURL = site.siteImgUrl;
  }
  showAddForm(){
    this.isAddFormShown = !this.isAddFormShown;
    this.isEdit = false
  }

  deleteSite(siteid: string){
    this.siteId = siteid;
    console.log(this.siteId);
    this.passwordMService.deleteSite(siteid ).subscribe({
      next:(res)=>{
        this.messageResponse = res.message;
        this.toastr.success(this.messageResponse)
      },
      error:(error)=>{
        this.messageResponse = 'Delete site Failed';
        this.toastr.error(this.messageResponse)
      },
      complete:()=>{
           this.fetchSites();
  
             }
    })
  }
}
