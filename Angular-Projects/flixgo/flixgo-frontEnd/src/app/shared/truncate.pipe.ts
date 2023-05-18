import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit = 200) {
    if (value.length > limit) {
        return value.substring(0, limit) + '...';
    }
    return value;
}

}
