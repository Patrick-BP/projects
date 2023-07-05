import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../shared/post.interface';
import { environment } from 'src/environments/environment';
import { ICategory } from '../shared/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAllCategories(){
   return this.httpClient.get<ICategory[]>(environment.apiUrl+'/categories')
  }
}
