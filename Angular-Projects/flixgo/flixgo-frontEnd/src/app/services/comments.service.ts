import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ImovieComment, IReply } from '../shared/comments.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient:HttpClient) { }

  
  addComment(data:ImovieComment){
   return this.httpClient.post<{
      error: boolean;
      message: string;
      data: ImovieComment;
    }>(environment.apiURL+`comments/add`, data)
  }
  getCommentsById(movieId:string){
    return this.httpClient.get<{
      error: boolean;
      message: string;
      data:any;
    }>(environment.apiURL+`comments/${movieId}`)
  };

  addReply(data:IReply){
    return this.httpClient.patch<{
       error: boolean;
       message: string;
       data: any;
     }>(environment.apiURL+`comments/reply`, data)
   }
  getRepliesByComment(commemtId:string){
    return this.httpClient.get<{
      error: boolean;
      message: string;
      data: ImovieComment[];
    }>(environment.apiURL+`comments/${commemtId}`)
  };

  deleteComment(commentId: string){
      return this.httpClient.patch<{
        error: boolean,
        message: string,
      }>(environment.apiURL+`comments/del/${commentId}`,{})
  };
  deleteReply(commentId: string, replyId:string){
    return this.httpClient.delete<{
      error: boolean,
      message: string,
    }>(environment.apiURL+`comments/del/${commentId}/${replyId}`)
}
}