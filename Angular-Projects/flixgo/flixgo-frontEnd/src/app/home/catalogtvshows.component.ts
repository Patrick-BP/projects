import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TvshowslistService } from '../services/tvshowslist.service';
import { ITvshows } from '../shared/movie.interface';

@Component({
  selector: 'app-catalogtvshows',
  templateUrl: './catalogtvshows.component.html',
  styleUrls: ['./catalogtvshows.component.css'],
})
export class CatalogtvshowsComponent {
  tvshowsList: ITvshows[] = [];

  form = inject(FormBuilder).nonNullable.group({
    genre: [''],
    language: [''],
    year: [''],
    country: [''],
    
  });

  constructor(private tvshowService: TvshowslistService) {
    this.tvshowService.getAllTvshows().subscribe((res) => {
      this.tvshowsList = res.data;
    });
  }

  ngOnInit(): void {}
  onsubmit() {
    this.tvshowService.filterTvshows(this.form.value).subscribe((res) => {
      this.tvshowsList = res.data;
    });
  }
}
