import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators,ValidationErrors, ValidatorFn, FormBuilder, FormArray } from '@angular/forms';
import { Produit } from 'src/app/client/produit/shared/models/produit';
import { CatalogueStoreService } from 'src/app/client/produit/shared/services/catalogue-store.service';
import { ProduitService } from 'src/app/gestionnaire/shared/services/produit.service';
@Component({
  selector: 'ss-form-menu',
  templateUrl: './form-menu.component.html',
  styleUrls: ['./form-menu.component.css']
})
export class FormMenuComponent implements OnInit {

  /* accordion */
  panleExpanded = true;
  panleExpanded2 = true;
  panleExpanded3 = true;

  /*form*/
  registerForm:any

  /* liste burgers */
  catas: Produit[]| any = undefined;
  frites: Produit[]| any = undefined;
  tailles: any[] = [];

  constructor(private serv:CatalogueStoreService,
     private produitServ:ProduitService,
     private fb:FormBuilder) { }

  ngOnInit(): void {

    this.serv.all().subscribe(data => {
      //console.log(data.produits);
      this.catas = data.produits?.filter(product => product.type === 'burger')
    })

    this.produitServ.allFrites().subscribe(data2 =>{
      //console.log(data2)
      this.frites = data2
    } )
    this.produitServ.allTaille().subscribe(data3 =>{
      //console.log(data3)
      this.tailles = data3
    } )
    this.registerForm = this.fb.group({
      "nom":[null,[Validators.required]],
      "image":[null,[Validators.required]],
      "description":[null,[Validators.required]],
      menuBurgers: this.fb.array([]),
      menuTailleBoissons:this.fb.array([]),
      menuPortionFrites:this.fb.array([]),
    }
    )
  }

  /*form*/

  submitData(){
    console.log(this.registerForm.value)
  }

  get nom(){
    return this.registerForm.get('nom')
  }
  get image(){
    return this.registerForm.get('image')
  }
  get description(){
    return this.registerForm.get('description')
  }

  get menuBurgers() {
    return this.registerForm.controls["menuBurgers"] as FormArray;
  }
  get menuTailleBoissons() {
    return this.registerForm.controls["menuTailleBoissons"] as FormArray;
  }
  get menuPortionFrites() {
    return this.registerForm.controls["menuPortionFrites"] as FormArray;
  }

  /* generer champ  */

  addBurger(){
    const burgerForm = this.fb.group({
      "burger":[null,[Validators.required]],
      "quantite":[null,[Validators.required]],
    });
    this.menuBurgers.push(burgerForm);
  }
  addTaille(){
    const TailleForm = this.fb.group({
      "tailleBoisson":[null,[Validators.required]],
      "quantite":[null,[Validators.required]],
    })
    this.menuTailleBoissons.push(TailleForm);
  };
  addFrites(){
    const FriteForm = this.fb.group({
      "portionFrite":[null,[Validators.required]],
      "quantite":[null,[Validators.required]],
    })
    this.menuPortionFrites.push(FriteForm);
  };

  /*suppression*/

  deleteBurger(lessonIndex: number) {
    this.menuBurgers.removeAt(lessonIndex);
  }
}
