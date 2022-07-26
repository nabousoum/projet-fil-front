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
  zonesAll:any[] = []
  i:number = 0

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
    this.comServ.allZone().subscribe((data:any)=>{
    this.i = Number(data.length)
    for (let index = 1; index <= this.i; index++) {
      this.comServ.commandesByZone(index).subscribe(data=>{
      this.commandesAll.push(data.filter((commande:any) => commande.etat=="termine"))
      })
    }
    console.log(this.commandesAll)
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
      data=>{
        this.toast.success({detail:"success",summary:"la livraison a bien été enregistré"})
      },
      err=>{
        console.log(err)
      },
    )
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
