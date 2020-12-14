import { Component, OnInit } from '@angular/core';
import {Mets} from '../../model/mets';
import {Inventaire} from '../../model/inventaire';
import {  NgForm } from '@angular/forms';
import { MetsService } from 'src/app/services/mets.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
imagePath = "/assets/images/jc2.jpg";
//Comme un fichier JSON pris avec la methode Get
unMets: Mets;
inventaire:Inventaire;
choixType:string[];

  constructor(private service:MetsService, private router:Router) { 
  }

  ngOnInit(): void {
    this.choixType = ["Repas", "Dessert", "Boisson"];
    this.inventaire = new Inventaire();
    this.unMets = new Mets();
  }

  public onSubmit(field: NgForm){
    if(field.valid){
      this.service.create(this.unMets).subscribe(res => {this.unMets = res},
        (err) => {
          console.log(err);
        });
        this.router.navigateByUrl('/crud');
    }
    else{
        alert("Le formulaire n'a pas été envoyé.");
    }   
  }
}
