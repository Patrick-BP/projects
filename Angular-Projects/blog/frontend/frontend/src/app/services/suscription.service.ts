import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICategory } from '../shared/category.interface';
import { ISubscription } from '../shared/subscription.interface';

@Injectable({
  providedIn: 'root'
})
export class SuscriptionService {

  constructor(private httpClient: HttpClient) { }

  sava(subscriber: ISubscription){
   return this.httpClient.post<{error: boolean, message: string, data:ISubscription}>(environment.apiUrl+'/subscription/new', subscriber)
  }
}
