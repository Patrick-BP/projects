import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISite } from './Shared/site.interface';

@Injectable({
  providedIn: 'root'
})
export class PasswordManagerService {

  constructor(private httpClient: HttpClient) { }


  addSite(siteData: ISite){
   return  this.httpClient.post<{error:string, message:string, data:ISite}>(environment.apiUrl+"/sites/new", siteData)
  }

  getSite(siteId: string){
   return  this.httpClient.get<ISite>(environment.apiUrl+"/sites"+siteId)
  }

  getAllSites(){
    return  this.httpClient.get<ISite[]>(environment.apiUrl+"/sites")
   }
  
  updateSite(siteId: string , siteData: ISite){
    return  this.httpClient.patch<{error:string, message:string, data:ISite}>(environment.apiUrl+"/sites/"+siteId, siteData)
   }

   deleteSite(siteId: string){
    return  this.httpClient.delete<{error:string, message:string, data:ISite}>(environment.apiUrl+"/sites/"+siteId)
   }
}
