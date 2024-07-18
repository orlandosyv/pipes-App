import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18nSelect
  public name: string = 'Orlando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'Mr.',
    female: 'Mrs.',
  };

  //i18nPlural
  public clients: string[] = ['Rose', 'Camy', 'Steve', 'Gil', 'Angeliño'];

  public changePerson() {
    this.name = 'Rosalia';
    this.gender = 'female';
  }

  public deleteClient() {
    this.clients.shift();
  }

  public countMap = {
    '=0': 'we do not any customer waiting 😀',
    '=1': 'we have only 1 customer ahead of you',
    other: 'we have # customers waiting 🫠 ',
  };

  //for KeyValue pipe
  public person = {
    name: 'Orlando',
    age: 35,
    address: 'Huancayo, Peru'
  }

  //for Async Pipe
  public myObservableTimer : Observable<number>= interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue : Promise<string>= new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('we have data in Promise.');
      console.log('we have data in Promise.');
    }, 3500)
  } )


}
