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
          label: 'File',
          items: [
              {label: 'New', icon: 'pi pi-fw pi-plus'},
              {label: 'Download', icon: 'pi pi-fw pi-download'}
          ]
      },
      {
          label: 'Edit',
          items: [
              {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
              {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
          ]
      }];
  }

}
