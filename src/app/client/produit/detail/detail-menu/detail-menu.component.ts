import { Component, Input, OnInit } from '@angular/core';
import { MenuBurger } from '../../shared/models/menuBurger';
import { MenuPortion } from '../../shared/models/menuPortion';

@Component({
  selector: 'ss-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {

  constructor() { }
  @Input('menuBurgers') menuBurgers : MenuBurger|null = null;
  @Input('menuPortions') menuPortions : MenuPortion|null = null;
  ngOnInit(): void {
  }

}
