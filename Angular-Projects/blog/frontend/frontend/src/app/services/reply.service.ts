import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReply } from '../shared/reply.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  constructor(private httpClient: HttpClient) { }

  saveReply(reply: IReply){
   return this.httpClient.post<{error:boolean, message:string, data:IReply}>(environment.apiUrl+'/replies/new', reply)
   
  }
  getAllReplies(commentId?: string){
   return this.httpClient.get<IReply[]>(environment.apiUrl+'/replies/comment/'+commentId)
   
  }
}
