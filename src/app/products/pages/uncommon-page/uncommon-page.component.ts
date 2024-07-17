import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18nSelect
  public name: string = "Orlando";
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'Mr.',
    female: 'Mrs.'
  }

  public changePerson() {
    this.name = 'Rosalia';
    this.gender = 'female';
  }
}
