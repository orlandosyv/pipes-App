import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``,
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero ;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.red,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Goku',
      canFly: true,
      color: Color.red,
    },
    {
      name: 'Orlando',
      canFly: true,
      color: Color.black,
    },
    {
      name: 'Seiya',
      canFly: false,
      color: Color.white,
    },
  ];

  public toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  public changeOrder(value: keyof Hero) {
    this.orderBy = value
  }

}
