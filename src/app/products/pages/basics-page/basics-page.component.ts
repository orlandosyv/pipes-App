import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLowerCase: string = 'orlando';
  public nameUpperCase: string = 'ORLANDO';
  public fullname: string = 'OrlAndO sErgIo';
  public customDate: Date = new Date();
}
