import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ITvshows } from '../shared/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class TvshowslistService {

  constructor(private httpclient:HttpClient) { }


  addTvshow(data:ITvshows) {
    return this.httpclient.post<{
      error: boolean;
      message: string;
      data: Object;
    }>(environment.apiURL + 'tvshow', data);
  }

  getAllTvshows() {
    return this.httpclient.get<{
      error: boolean;
      message: string;
      data: any[];
    }>(environment.apiURL + 'tv-shows');
  }
  getTvshowById(tvId: string) {
    return this.httpclient.get<{
      error: boolean;
      message: string;
      data: any;
    }>(environment.apiURL + `tvshows/${tvId}`);
  }
  updateTvshowById(tvId: string, data: ITvshows) {
    return this.httpclient.patch<{
      error: boolean;
      message: string;
      data: any;
    }>(environment.apiURL + `tvshow/${tvId}`, data);
  }
  deleteTvshowById(tvId: string) {
    return this.httpclient.delete<{
      error: boolean;
      message: string;
      data: any;
    }>(environment.apiURL + `tvshow/del/${tvId}`);
  };

  updatePosterById(tvId: string, data:any) {
    return this.httpclient.patch<{
      error: boolean;
      message: string;
      data: Object;
    }>(environment.apiURL + `tvshow/poster/${tvId}`, data);
  };

  filterTvshows(data:any) {
    return this.httpclient.post<{
      error: boolean;
      message: string;
      data:any;
    }>(environment.apiURL + `tv-shows/filter`, data);
  }
}
