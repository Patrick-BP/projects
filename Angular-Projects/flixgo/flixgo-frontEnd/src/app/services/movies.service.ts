import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMovie } from '../shared/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpclient: HttpClient) {}

  addMovie(data: IMovie) {
    return this.httpclient.post<{
      error: boolean;
      message: string;
      data: Object;
    }>(environment.apiURL + 'movie', data);
  }

  getAllMovies() {
    return this.httpclient.get<{
      error: boolean;
      message: string;
      data: any[];
    }>(environment.apiURL + 'movies');
  }
  getMovieById(movieId: string) {
    return this.httpclient.get<{
      error: boolean;
      message: string;
      data: any;
    }>(environment.apiURL + `movies/${movieId}`);
  };
  userGetMovieById(movieId: string) {
    return this.httpclient.get<{
      error: boolean;
      message: string;
      data: IMovie;
    }>(environment.apiURL + `movies/${movieId}`);
  }
  updateMovieById(movieId: string, data:any) {
    return this.httpclient.patch<{
      error: boolean;
      message: string;
      data: Object;
    }>(environment.apiURL + `movie/${movieId}`, data);
  };
  updatePosterById(movieId: string, data:any) {
    return this.httpclient.patch<{
      error: boolean;
      message: string;
      data: Object;
    }>(environment.apiURL + `movie/poster/${movieId}`, data);
  };
  updateVideoById(movieId: string, data:any) {
    return this.httpclient.patch<{
      error: boolean;
      message: string;
      data: Object;
    }>(environment.apiURL + `movie/video/${movieId}`, data);
  }
  deleteMovieById(movieId: string) {
    return this.httpclient.delete<{
      error: boolean;
      message: string;
      data: Object;
    }>(environment.apiURL + `movie/del/${movieId}`);
  }


  //Playlist APIs

addToPlaylist(data:any){
  return this.httpclient.post<{
    error: boolean;
    message: string;
    data: any;
  }>(environment.apiURL + `playlist/add`, data)
  };
 removeToPlaylist(data:any){
  return this.httpclient.delete<boolean>(environment.apiURL + `playlist/del/${data.userId}/${data.movieId}`)
  };

  getPlayList(userId:string){
return this.httpclient.get<{
  error: boolean;
  message: string;
  data: any;
}>(environment.apiURL + `playlist/${userId}`)

  };
  
  checkPlaylist(data:any){
    return this.httpclient.get<boolean>(environment.apiURL + `playlist/check/${data.userId}/${data.movieId}`)
    };

    //search

    searchMovie(data:any) {
      return this.httpclient.get<any>(environment.apiURL + `movies/search/${data}`);
    }

    // Filter
    filterMovie(data:any) {
      return this.httpclient.post<{
        error: boolean;
        message: string;
        data:any;
      }>(environment.apiURL + `movies/filter`, data);
    }
  

}
