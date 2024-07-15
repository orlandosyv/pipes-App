import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``,
})

export class MenuComponent {

  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      // { label: 'New', icon: 'pi pi-plus' },
      // { label: 'Search', icon: 'pi pi-search' },
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          { label: 'Text and Dates', icon: 'pi pi-align-left' },
          { label: 'Numbers', icon: 'pi pi-dollar' },
          { label: 'Not Common', icon: 'pi pi-globe' },
        ],
      },
      {
        label: 'Customized Pipes',
        icon: 'pi pi-globe',
        items: [
          {
            label: 'Other element',
            icon: 'pi pi-cog',
          },
        ],
      },
    ];
  }
}
