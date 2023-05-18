import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Iepisode } from '../shared/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpclient:HttpClient) { }

  addEpisode(data:Iepisode) {
    return this.httpclient.post<{
      error: boolean;
      message: string;
      data: Object;
    }>(environment.apiURL + 'episode', data);
  };
  getEpisodesTvshowById(tvId: string) {
    return this.httpclient.get<{
      error: boolean;
      message: string;
      data: [];
    }>(environment.apiURL + `episode/${tvId}`);
  };
  getEpisodeTvshowById(tvId: string, episodeId:string) {
    return this.httpclient.get<{
      error: boolean;
      message: string;
      data: any;
    }>(environment.apiURL + `episodes/${tvId}/${episodeId}`);
  };
  deleteEpisodeById(episodeId: string) {
    return this.httpclient.delete<{
      error: boolean;
      message: string;
      data: [];
    }>(environment.apiURL + `episode/del/${episodeId}`);
  };

  
  updateVideoById(episId: string, data:any) {
    return this.httpclient.patch<{
      error: boolean;
      message: string;
      data: Object;
    }>(environment.apiURL + `episode/video/${episId}`, data);
  }
}
