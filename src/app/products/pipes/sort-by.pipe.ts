import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'sortBy'
})
export class SortBy implements PipeTransform {

  transform(heroes: Hero[], sortbye?: keyof Hero | ''): Hero[] {
    switch (sortbye) {
      case 'name':
        return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));
      case 'canFly':
        return heroes.sort((a, b) => (a.canFly > b.canFly ? 1 : -1));
      case 'color':
        return heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
      default:
        return heroes;
    }

  }

}
