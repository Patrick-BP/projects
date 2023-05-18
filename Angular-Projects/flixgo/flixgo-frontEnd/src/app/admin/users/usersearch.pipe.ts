import { Pipe, PipeTransform } from '@angular/core';
import { IManageuser } from 'src/app/shared/movie.interface';

@Pipe({
  name: 'usersearch',
})
export class UsersearchPipe implements PipeTransform {
  transform(usersList: IManageuser[], usersearchInput: string): any[] {
    if (!usersearchInput) {
      return usersList;
    }

    usersearchInput = usersearchInput.toLowerCase();
    return usersList.filter((x) =>
      x.firstname.toLowerCase().includes(usersearchInput)
    );
  }
}
