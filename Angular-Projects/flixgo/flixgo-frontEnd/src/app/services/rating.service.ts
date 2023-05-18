import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(
    private httpClient: HttpClient
  ) { }

  addRating(data:any){
    return this.httpClient.post<{
      error:boolean,
      message:string,
      data:any
    }>(environment.apiURL +'rating/add', data);
  };

  checkRating(userId:string, movieId:string){
    return this.httpClient.get<{
      error:boolean,
      message:string,
      data:any
    }>(environment.apiURL +`rating/check/${userId}/${movieId}`);
  };

}
