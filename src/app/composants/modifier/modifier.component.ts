import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { Inventaire } from 'src/app/model/inventaire';
import { Mets } from 'src/app/model/mets';
import { MetsService } from 'src/app/services/mets.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  imagePath = "assets/images/jc2.jpg";
//Comme un fichier JSON pris avec la methode Get
unMets: Mets;
inventaire:Inventaire;
choixType:string[];
myParam:number;

  constructor(private service:MetsService, private router:Router, private route:ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.choixType = ["Repas", "Dessert", "Boisson"];
    this.inventaire = new Inventaire();
    this.unMets = new Mets();
    this.myParam = this.route.snapshot.params['id'];
    console.log(this.myParam);
    this.service.findById(this.myParam).subscribe(res => {
      this.unMets = res
    });
  }

  public onSubmit(field: NgForm){
    if(field.valid){
      this.service.update(this.unMets.id, this.unMets).subscribe(res => {this.unMets = res},
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
