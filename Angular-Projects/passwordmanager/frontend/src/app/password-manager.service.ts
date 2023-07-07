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
   return  this.httpClient.post<ISite>(environment.apiUrl+"/sites", siteData)
  }

  getSite(siteId: string){
   return  this.httpClient.get<ISite>(environment.apiUrl+"/sites"+siteId)
  }

  getAllSites(){
    return  this.httpClient.get<ISite[]>(environment.apiUrl+"/sites")
   }
  
  updateSite(siteId: string , siteData: ISite){
    return  this.httpClient.patch<ISite>(environment.apiUrl+"/sites/"+siteId, siteData)
   }

   deleteSite(siteId: string){
    return  this.httpClient.delete<ISite>(environment.apiUrl+"/sites/"+siteId)
   }
}
