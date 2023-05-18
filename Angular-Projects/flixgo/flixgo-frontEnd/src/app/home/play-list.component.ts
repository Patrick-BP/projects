import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { IMovie } from '../shared/movie.interface';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css'],
})
export class PlayListComponent {
  playList: any[] = [];
  userId!: string;
  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) {
    this.userId = route.snapshot.paramMap.get('userId') as string;

    this.movieService.getPlayList(this.userId).subscribe((res) => {
      this.playList = res.data;
    });
  }
}
