import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { IPost } from '../shared/post.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient, private storage: AngularFireStorage) { }



 
  savePost(selectedImage: any, postData: IPost){
    const filePath = `postIMG/${Date.now()}`;
   
    this.storage.upload(filePath, selectedImage).then(()=>{
      this.storage.ref(filePath).getDownloadURL().subscribe(URL=>{
        postData.imgPath = URL;
      })
     
    })

    return this.httpClient.post<{
      error: String,
      message: String
    }>(environment.apiUrl+'/posts/new', postData)
  }

  

}
