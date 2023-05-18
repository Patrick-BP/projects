import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from './movie.interface';

@Pipe({
  name: 'search'
})


  export class SearchPipe implements PipeTransform {
    transform(moviesList: IMovie[], searchInput: string): any[] {
      console.log(searchInput);
      if (!searchInput) {
        return []
      }
  
      searchInput = searchInput.toLowerCase();
      return moviesList.filter((x) =>
        x.title.toLowerCase().includes(searchInput)
      );
    }
  
  }