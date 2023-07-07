import { Component, Input, OnInit } from '@angular/core';
import { ReplyService } from 'src/app/services/reply.service';
import { IReply } from 'src/app/shared/reply.interface';

@Component({
  selector: 'app-reply-list',
  templateUrl: './reply-list.component.html',
  styleUrls: ['./reply-list.component.css']
})
export class ReplyListComponent implements OnInit {

  @Input() public commentIdData?: string;
  
  replyList!: IReply[];
  constructor( private replyService: ReplyService) { }


  ngOnInit(): void {
    this.fetchReply();
  }

  fetchReply(){
    this.replyService.getAllReplies(this.commentIdData).subscribe({
      next:(res)=>{
        this.replyList = res
        console.log(this.replyList);
      }
    });

  }
}
