import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IManageuser, IMovie, ITvshows } from '../shared/movie.interface';
import {
  
  INITIAL_MOVIES_STATE,
  INITIAL_MOVIE_STATE,
  INITIAL_TVSHOWS_STATE,
  INITIAL_TVSHOW_STATE,
  INITIAL_USEREDIT_STATE,
  INITIAL_USERS_STATE,
} from '../shared/movies.interface';
import {
  IAdmin,
  Ilogin,
  INITIAL_ADMIN_STATE,
  INITIAL_LOGIN_STATE,
  INITIAL_USER_STATE,
  Iuser,
  IUserLogedin,
} from '../user/user.Interface';

@Injectable({
  providedIn: 'root',
})
export class GlobalstateService {
  issignedin: BehaviorSubject<Ilogin> = new BehaviorSubject<Ilogin>(
    INITIAL_LOGIN_STATE
  );
  userInfo: BehaviorSubject<IUserLogedin> = new BehaviorSubject<IUserLogedin>(
    INITIAL_USER_STATE
  );

  isAdmin: BehaviorSubject<IAdmin> = new BehaviorSubject<IAdmin>(
    INITIAL_ADMIN_STATE
  );
 
  userId: BehaviorSubject<{id:string}> = new BehaviorSubject<{id:string}>(
    {id:""}
  );

  moviesList: BehaviorSubject<IMovie[]> = new BehaviorSubject<IMovie[]>(
    INITIAL_MOVIES_STATE
  );
  movie: BehaviorSubject<IMovie> = new BehaviorSubject<IMovie>(
    INITIAL_MOVIE_STATE
  );

  usersList: BehaviorSubject<IManageuser[]> = new BehaviorSubject<IManageuser[]>(
    INITIAL_USERS_STATE
  );
  usersEdit: BehaviorSubject<IManageuser> = new BehaviorSubject<IManageuser>(
    INITIAL_USEREDIT_STATE
  );

  tvShowList: BehaviorSubject<ITvshows[]> = new BehaviorSubject<ITvshows[]>(
    INITIAL_TVSHOWS_STATE
  );
  tvShow: BehaviorSubject<ITvshows> = new BehaviorSubject<ITvshows>(
    INITIAL_TVSHOW_STATE
  );

resetState(){
  this.issignedin.next(INITIAL_LOGIN_STATE) ;
  this.userInfo.next(INITIAL_USER_STATE);
  this.isAdmin.next(INITIAL_ADMIN_STATE);
  this.userId.next({id:""});
  this.moviesList.next(INITIAL_MOVIES_STATE);
  this.movie.next(INITIAL_MOVIE_STATE);
  this.usersList.next(INITIAL_USERS_STATE)
  this.usersEdit.next(INITIAL_USEREDIT_STATE);
  this.tvShowList.next(INITIAL_TVSHOWS_STATE);
  this.tvShow.next(INITIAL_TVSHOW_STATE)
}
 
}
