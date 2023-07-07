import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { ReplyService } from 'src/app/services/reply.service';
import { IComment } from 'src/app/shared/comment.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() public postIdData?: string;

  commentList!: IComment[];
  isRepliesShow: boolean = false;
  isRepliesList: boolean = false;
  numberOfReplies!: number;
  commentId!: string;

  constructor( 
    private commentService: CommentService,
    private repliesService: ReplyService
    ) { }

  ngOnInit(): void {
    this.fetchComments();
  }

  fetchComments(){
    this.commentService.getAllComments(this.postIdData).subscribe({
      next:(res)=>{
        this.commentList = res
      }
    });

  }


  showReplyForm(){
    this.isRepliesShow = !this.isRepliesShow;
  }

  showReplyList(){
    
    this.isRepliesList = !this.isRepliesList;
  }

}
