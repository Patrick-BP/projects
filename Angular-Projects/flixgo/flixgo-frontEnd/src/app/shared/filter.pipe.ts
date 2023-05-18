import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filters: {[key: string]: any}): any {
    if (!items || !filters) {
      return items;
    }
    // filter items array
    return items.filter(item => {
        let match = true;
        for (const key in filters) {
          if (filters.hasOwnProperty(key)) {
            if (filters[key] && item[key] !== filters[key]) {
              match = false;
              break;
            }
          }
        }
        return match;
    });
  }

}
