import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Iuser, Icredentials, IchangePassword, IProfile } from '../user/user.Interface';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpclient: HttpClient) {}

  signUp(data: Iuser) {
    return this.httpclient.post<{
      error: boolean;
      message: string;
      data: Object;
    }>(environment.apiURL + 'usr/signup', data);
  }

  signIn(data: Icredentials) {
    return this.httpclient.post<{
      error: boolean;
      message: string;
      data: any;
    }>(environment.apiURL + 'user/login', data);
  }

  forgotPassword(email: Object) {
    return this.httpclient.patch<{
      error: boolean;
      message: string;
      data: Object;
    }>(environment.apiURL + 'usr/forgotpassword', email);
  }

  changePassword(userId: string, data: IchangePassword) {
    return this.httpclient.patch<{
      error: boolean;
      message: string;
      data: Object;
    }>(environment.apiURL + `user/changepassword/${userId}`, data);
  }
  editProfile(userId:string, data:IProfile){
    return this.httpclient.patch<{
      error: boolean;
      message: string;
      data: Object;
    }>(environment.apiURL + `user/${userId}`, data);
  }
  uploadProfile(userId:string, data:any){
    return this.httpclient.patch<{
      error: boolean;
      message: string;
      data: any;
    }>(environment.apiURL + `user/pic/${userId}`, data);
  }


  // Admin

  getAllUsers(){
    return this.httpclient.get<{
      error: boolean;
      message: string;
      data: Object;
    }>(environment.apiURL + 'users')
  };
  getUser(userId:string){
    return this.httpclient.get<{
      error: boolean;
      message: string;
      data: Object;
    }>(environment.apiURL + `user/${userId}`)
  };
  changeUserRole(userId:string, data:Object){
    return this.httpclient.patch<{
      error: boolean;
      message: string;
      data: Object;
    }>(environment.apiURL + `users/${userId}`, data);
  };
  disableUser(userId:string, data:Object){
    return this.httpclient.patch<{
      error: boolean;
      message: string;
      data: Object;
    }>(environment.apiURL + `users/${userId}`, data);
  }

  deleteAccount(userId:string, data:Object){
    return this.httpclient.patch<{
      error: boolean;
      message: string;
      data: Object;
    }>(environment.apiURL + `user/${userId}`, data);
  }
}
