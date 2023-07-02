import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../shared/category.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }


  getCategoryByid(categoryId : String){
     return this.httpClient.get<{
      error: Boolean,
      message: string,
      data: ICategory
     }>(environment.apiUrl + '/categories/' + categoryId)
  }

  addCategory(category: ICategory){
    return this.httpClient.post<{
        error: Boolean,
        message: string,
     }>(environment.apiUrl + '/categories/new', category)
  }

  getAllCategories(){
    return this.httpClient.get<ICategory[]>(environment.apiUrl + '/categories')
  }

  editCategoryById(categoryId: string, category?: ICategory){
    return this.httpClient.patch<{
      error: Boolean,
      message: string,
     }>(environment.apiUrl + `/categories/${categoryId}`, category)
  }

  deleteCategoryByid(categoryId?: String){
    return this.httpClient.delete<{
      error: Boolean,
      message: string,
     }>(environment.apiUrl + `/categories/${categoryId}`)
  }



}


