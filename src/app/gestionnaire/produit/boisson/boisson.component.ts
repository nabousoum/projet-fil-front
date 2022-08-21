import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../shared/services/produit.service';

@Component({
  selector: 'ss-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.css']
})
export class BoissonComponent implements OnInit {

  boissons:any[] = []

  totalLenght:number = 0
  p: number = 1

  constructor(
    private produitServ: ProduitService
  ) { }

  ngOnInit(): void {
    this.produitServ.allBoissons().subscribe(data=>{
      this.boissons = data
      this.totalLenght = this.boissons.length
    })
  }

}
