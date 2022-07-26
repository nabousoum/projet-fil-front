import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../shared/models/menu';
import { CatalogueStoreService } from '../shared/services/catalogue-store.service';

@Component({
  selector: 'ss-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  catalogues$ : Observable<Menu[]> | null = null;
  constructor(private serv:CatalogueStoreService) { }

  ngOnInit(): void {
    this.catalogues$ = this.serv.all();
  }
}
