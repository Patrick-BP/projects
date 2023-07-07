import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedInGuard:boolean = false;

  constructor(private afAuth: AngularFireAuth, private toastr: ToastrService, private route: Router) { }

  login(email: string,  password: string){
    this.afAuth.signInWithEmailAndPassword(email, password).then(logRef =>{
        this.toastr.success('Logged In Successfully');
        this.loadUser();
        this.isLoggedIn.next(true)
        this.isLoggedInGuard = true
        this.route.navigate(['/'])
    }).catch(e=>{
      this.toastr.warning(e.message)
    })
  }

  loadUser(){
    this.afAuth.authState.subscribe(user=>{
      localStorage.setItem('user', JSON.stringify(user))
    })
  }

  logout(){
    this.afAuth.signOut().then(()=>{
      this.toastr.success('User Logged Out successfully');
      localStorage.clear();
      this.isLoggedIn.next(false);
      this.isLoggedInGuard = false;
      this.route.navigate(['login'])
    })
  }

  loggedIn(): Observable<boolean>{
    return this.isLoggedIn.asObservable()
  }
}
