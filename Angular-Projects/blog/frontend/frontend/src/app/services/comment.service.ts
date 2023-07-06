import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { IComment } from '../shared/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  saveComment(comment: IComment){
   return this.httpClient.post<{error:boolean, message:string, data:IComment}>(environment.apiUrl+'/comments/new', comment)
   
  }
  getAllComments(postId?: string){
   return this.httpClient.get<IComment[]>(environment.apiUrl+'/comments/post/'+postId)
   
  }
}
