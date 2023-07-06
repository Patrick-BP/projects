import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISubscription } from '../shared/subscription.interface';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private httpClient: HttpClient) { }


getAllSubscribers(){
  return this.httpClient.get<{error:boolean, message: string, data:ISubscription[]}>(environment.apiUrl+`/subscription`)
}

deleteSubscriber(subscriberId: string){
  return this.httpClient.delete<{error:string, message:string, data:ISubscription}>(environment.apiUrl+`/subscription/${subscriberId}`)
}
}
