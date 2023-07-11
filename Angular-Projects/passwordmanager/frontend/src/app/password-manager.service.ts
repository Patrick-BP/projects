import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISite } from './Shared/site.interface';
import { IPassword } from './Shared/password.interface';
import { IUser } from './Shared/user.interface';


@Injectable({
  providedIn: 'root'
})
export class PasswordManagerService {

  constructor(private httpClient: HttpClient) { }

// ################## Site ########################'

  addSite(siteData: ISite){
   return  this.httpClient.post<{error:string, message:string, data:ISite}>(environment.apiUrl+"/sites/new", siteData)
  }

  getSite(siteId: string){
   return  this.httpClient.get<ISite>(environment.apiUrl+"/sites"+siteId)
  }

  getAllSites(userId: string){
    return  this.httpClient.get<ISite[]>(environment.apiUrl+"/sites/all/"+userId)
   }
  
  updateSite(siteId: string , siteData: ISite){
    return  this.httpClient.patch<{error:string, message:string, data:ISite}>(environment.apiUrl+"/sites/"+siteId, siteData)
   }

   deleteSite(siteId: string){
    return  this.httpClient.delete<{error:string, message:string, data:ISite}>(environment.apiUrl+"/sites/"+siteId)
   }



// ############### Password ########################

   addPassword(siteid: string, PasswordData: IPassword){
    return  this.httpClient.post<{error:string, message:string, data:IPassword}>(environment.apiUrl+"/passwords/new/"+siteid, PasswordData)
   }
 
   getPassword(siteId: string){
    return  this.httpClient.get<ISite>(environment.apiUrl+"/passwords"+siteId)
   }
 
   getAllPasswordBySite(siteId: string){
     return  this.httpClient.get<IPassword[]>(environment.apiUrl+"/passwords/site/"+siteId)
    }
   
   updatePassword(passwordId: string , password: IPassword){
     return  this.httpClient.patch<{error:string, message:string, data:IPassword}>(environment.apiUrl+"/passwords/"+passwordId, password)
    }
 
    deletePassword(passwordId: string){
     return  this.httpClient.delete<{error:string, message:string, data:ISite}>(environment.apiUrl+"/passwords/"+passwordId)
    }


// ############### Login ########################

addUser(userData: IUser){
  return  this.httpClient.post<{error:string, message:string, data:IUser}>(environment.apiUrl+"/users/new/", userData)
 }

 getUser(userId: string){
  return  this.httpClient.get<IUser>(environment.apiUrl+"/users/"+userId)
 }

 
 
 updateUser(userId: string , user: IUser){
   return  this.httpClient.patch<{error:string, message:string, data:IUser}>(environment.apiUrl+"/users/"+userId, user)
  }

  deleteUser(userId: string){
   return  this.httpClient.delete<{error:string, message:string, data:IUser}>(environment.apiUrl+"/users/"+userId)
  }

login(credentials: IUser){
  return  this.httpClient.post<{error: string, message: string, data:IUser}>(environment.apiUrl+"/users/login", credentials)
}
   
}
