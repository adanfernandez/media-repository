import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CommonUrls } from '../../shared/common-urls';

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
          label: 'Menú',
          items: [
              {label: 'Login', icon: 'pi pi-sign-in', url: CommonUrls.LOGIN},
              {label: 'Registro', icon: 'pi pi-user-plus', url: CommonUrls.REGISTER}
          ]
      }];
  }

}
