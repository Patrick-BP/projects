import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ReplyService } from 'src/app/services/reply.service';
import { IReply } from 'src/app/shared/reply.interface';

@Component({
  selector: 'app-reply-form',
  templateUrl: './reply-form.component.html',
  styleUrls: ['./reply-form.component.css']
})
export class ReplyFormComponent implements OnInit {


  replyForm = inject(FormBuilder).nonNullable.group({
    name: ['', [Validators.required, Validators.min(3)]],
    reply: ['', [Validators.required, Validators.max(500)]]
  })


  @Input() public commentIdData?: string

  responseMessage!:string;
  constructor(private replyService: ReplyService, private toastr: ToastrService) { }

  get fc(){
    return this.replyForm.controls
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const reply = {
      commentId: this.commentIdData,
      name: this.replyForm.value.name,
      reply: this.replyForm.value.reply
     }
  
    
      this.replyService.saveReply(reply as IReply).subscribe({
        next:(res)=>{
          this.responseMessage = res.message;
          this.toastr.success(this.responseMessage);
        },
        error:(error)=>{
        
          this.responseMessage = "comment Failed";
          this.toastr.error(this.responseMessage);
        },
        complete:()=>{
          this.replyForm.reset();
        }
      })
  }

}
