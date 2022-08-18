import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../shared/services/commande.service';

@Component({
  selector: 'ss-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {

  zones:any[]= []
  constructor(
    private comServ:CommandeService
  ) { }

  ngOnInit(): void {
    this.comServ.allZone().subscribe((data:any)=>{
      this.zones = data
    })
  }

}
