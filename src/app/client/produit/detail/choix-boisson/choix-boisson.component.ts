import { Component, Input, OnInit } from '@angular/core';
import { MenuTailleBoisson, TailleBoisson } from '../../shared/models/detail';

@Component({
  selector: 'ss-choix-boisson',
  templateUrl: './choix-boisson.component.html',
  styleUrls: ['./choix-boisson.component.css']
})
export class ChoixBoissonComponent implements OnInit {
  @Input('boissons') boissons : TailleBoisson|null = null;
  @Input('tailleBoissons') tailleBoissons : MenuTailleBoisson|null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
