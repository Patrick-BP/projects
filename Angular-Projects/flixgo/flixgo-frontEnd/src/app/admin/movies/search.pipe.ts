import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from '../../shared/movie.interface';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(moviesList: IMovie[], searchInput: string): any[] {
    if (!searchInput) {
      return moviesList;
    }

    searchInput = searchInput.toLowerCase();
    return moviesList.filter((x) =>
      x.title.toLowerCase().includes(searchInput)
    );
  }
}
