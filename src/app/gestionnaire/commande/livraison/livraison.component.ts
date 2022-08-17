import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommandeService } from '../../shared/services/commande.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'ss-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {

  commandesZones :any[] = []
  commandesZones2 :any[] = []
  commandesZones3 :any[] = []
  commandesAll :any[] = []

  livreurs: any[] = []

  panleExpanded = true;
  panleExpanded2 = true;
  panleExpanded3 = true;

  registerForm:any

  constructor(
    private comServ:CommandeService,
    private fb:FormBuilder,
    private toast: NgToastService,
  ) { }

  ngOnInit(): void {
    // this.comServ.allCommande().subscribe(data=>{
    //     this.commandesAll = data
    // })
    this.comServ.commandesByZone(1).subscribe(data=>{
      this.commandesZones = data.filter((commande:any) => commande.etat=="termine")
    })
    this.comServ.commandesByZone(2).subscribe(data=>{
      this.commandesZones2 = data.filter((commande:any) => commande.etat=="termine")
    })
    this.comServ.commandesByZone(3).subscribe(data=>{
      this.commandesZones3 = data.filter((commande:any) => commande.etat=="termine")
    })
    this.comServ.allLivreurs().subscribe(data=>{
      this.livreurs = data.filter((livreur:any)=> livreur.etat=="disponible")
    })

    /* form */
    this.registerForm = this.fb.group({
      "commandes": this.fb.array([]),
      "livreur":[null,[Validators.required]],
    })
  }

  /* formulaire */
  submitData(){
    this.registerForm.value.livreur = {id:Number(this.livreur.value)}
    console.log(this.registerForm.value)

    /* enregistrer livraison */
    this.comServ.addLivraison(this.registerForm.value).subscribe(
      err=>{
        console.log(err)
      },
    )
    this.toast.success({detail:"success",summary:"le menu a bien été enregistré"})
  }

  get commandes() {
    return this.registerForm.controls["commandes"] as FormArray;
  }
  get livreur(){
    return this.registerForm.get('livreur')
  }
  get id(){
    return this.registerForm.get('id')
  }
  /* function onChange */
  onChange(id:string, event: any) {
    const checkFormArray = <FormArray>this.registerForm.controls.commandes;
    let isChecked = event.target.checked 
    if(isChecked) {
      const test = this.fb.group({
        "id":id
      })
      checkFormArray.push(test);
    } else {
      let index = checkFormArray.controls.findIndex(x => x.value == id)
      checkFormArray.removeAt(index);
    }
  }

}
