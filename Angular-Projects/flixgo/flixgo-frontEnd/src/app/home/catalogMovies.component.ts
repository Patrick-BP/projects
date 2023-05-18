import { Component, inject, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { IMovie } from '../shared/movie.interface';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalogMovies.component.html',
  styleUrls: ['./catalogMovies.component.css'],
})
export class CatalogComponent implements OnInit {
  moviesList: IMovie[] = [];

  form = inject(FormBuilder).nonNullable.group({
    genre: [''],
    language: [''],
    year: [''],
    country: [''],
    quality: [''],
    rating: [''],
  });

  constructor(private movieService: MoviesService) {
    this.movieService.getAllMovies().subscribe((res) => {
      this.moviesList = res.data;
    });
  }

  ngOnInit(): void {}
  onsubmit() {
    this.movieService.filterMovie(this.form.value).subscribe((res) => {
      this.moviesList = res.data;
    });
  }
}
