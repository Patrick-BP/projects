import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPost } from '../shared/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpclient: HttpClient) { }


  getAllPosts(){
    return this.httpclient.get<IPost[]>(environment.apiUrl+'/posts')
  }

  getPostById(postId?: string){
    return this.httpclient.get<{error:"", message:"", data:IPost[]}>(environment.apiUrl+'/posts/'+postId)
  }

  getPostByCategory(categoryId?: string){
    return this.httpclient.get<{error:"", message:"", data:IPost[]}>(environment.apiUrl+'/posts/category/'+categoryId)
  }

  viewCourter(postId: string){
    return  this.httpclient.patch<{error:"", message:"", data:IPost}>(environment.apiUrl+'/posts/'+postId, {})
  }
}
