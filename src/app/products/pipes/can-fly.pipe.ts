import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class canFly implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Yes, Fly is a skill' : 'No, impossible';
  }
}
