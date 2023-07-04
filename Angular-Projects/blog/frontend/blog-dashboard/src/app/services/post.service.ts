import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../shared/post.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }


 save(postData: IPost){
  return this.httpClient.post<{error: String, message: string
  }>(environment.apiUrl+'/posts/new', postData)
 }

getAllPosts(){
  return this.httpClient.get<IPost[]>(environment.apiUrl+`/posts`)
}

getPost(postId: string){
  return this.httpClient.get<{error:string, message:string, data:IPost}>(environment.apiUrl+`/posts/${postId}`)
}


updatePost(post: IPost, postid?: string){
  return this.httpClient.patch<{error:string, message:string, data:IPost}>(environment.apiUrl+`/posts/${postid}`, post)
}

deletePost(postid: string){
  return this.httpClient.delete<{error:string, message:string, data:IPost}>(environment.apiUrl+`/posts/${postid}`)
}
}
