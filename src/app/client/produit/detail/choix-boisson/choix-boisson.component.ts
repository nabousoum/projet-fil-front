import { Component, Input, OnInit } from '@angular/core';
import { MenuTailleBoisson, TailleBoisson } from '../../shared/models/detail';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'ss-choix-boisson',
  templateUrl: './choix-boisson.component.html',
  styleUrls: ['./choix-boisson.component.css']
})
export class ChoixBoissonComponent implements OnInit {
  @Input('boissons') boissons : TailleBoisson|null = null;
  @Input('tailleBoissons') tailleBoissons : MenuTailleBoisson|null = null;
  @Input('frites') frites : Produit|null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
