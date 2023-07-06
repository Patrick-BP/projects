import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import { IComment } from 'src/app/shared/comment.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
commentForm = inject(FormBuilder).nonNullable.group({
    name: ['', [Validators.required, Validators.min(3)]],
    comment: ['', [Validators.required, Validators.max(500)]]
  })

  @Input() public postIdData?: string;
  constructor( private commentService: CommentService, private toastr: ToastrService) { }

  responseMessage!:string;

  get fc(){
    return this.commentForm.controls
  }
  ngOnInit(): void {
   
  }

  onSubmit(){
   const comment = {
    postId: this.postIdData,
    name: this.commentForm.value.name,
    comment: this.commentForm.value.comment
   }

   console.log(comment);
    this.commentService.saveComment(comment as IComment).subscribe({
      next:(res)=>{
        this.responseMessage = res.message;
        this.toastr.success(this.responseMessage);
      },
      error:(error)=>{
      
        this.responseMessage = "comment Failed";
        this.toastr.error(this.responseMessage);
      },
      complete:()=>{
        this.commentForm.reset();
      }
    })
  }
}
