import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SuscriptionService } from '../services/suscription.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {
  responseMessage!: string;
  subscribeForm = inject(FormBuilder).nonNullable.group({
    name: ['', [Validators.required, Validators.min(3)]],
    email: ['', [Validators.required, Validators.email]]
  })
  constructor(
    private subscribeService : SuscriptionService,
    private toastr: ToastrService) { }

  get fc(){
    return this.subscribeForm.controls
  }
  ngOnInit(): void {
  }


  onSubmit(){
    console.log(this.subscribeForm.value);
    this.subscribeService.sava(this.subscribeForm.value).subscribe({
      next:(res)=>{
        this.responseMessage = res.message;
        this.toastr.success(this.responseMessage);
      },
      error:(error)=>{
        if(error.status == 400){
          this.toastr.warning("You are already subscribe");
          this.subscribeForm.reset();
        }
        this.responseMessage = "subscription Failed";
        this.toastr.error(this.responseMessage);
      },
      complete:()=>{
        this.subscribeForm.reset();
      }
    })
  }
}
