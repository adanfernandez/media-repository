import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
      this.items = [{
          label: 'Navegación',
          items: [
              {label: 'home', icon: 'pi pi-home'},
              {label: 'login', icon: 'pi pi-sign-in'}
          ]
      }];
  }

}
