import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../shared/services/produit.service';

@Component({
  selector: 'ss-frite',
  templateUrl: './frite.component.html',
  styleUrls: ['./frite.component.css']
})
export class FriteComponent implements OnInit {

  frites:any [] = []

  totalLenght:number = 0
  p: number = 1

  constructor(
    private produitServ: ProduitService
  ) { }

  ngOnInit(): void {
    this.produitServ.allFrites().subscribe(data => {
      this.frites = data
      this.totalLenght = this.frites.length
    })

  }

}
