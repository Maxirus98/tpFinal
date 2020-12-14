import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetsService } from 'src/app/services/mets.service';
import {Mets} from '../../model/mets';
import {Inventaire} from '../../model/inventaire';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
  myParam:number;
  imagePath = "/assets/images/jc2.jpg";
  unMets:Mets = new Mets();
  inventaire:Inventaire;
  choixType:string[];
  constructor(private service:MetsService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.choixType = ["Repas", "Dessert", "Boisson"];
    this.inventaire = new Inventaire();
    this.myParam = this.route.snapshot.params['id'];
    console.log(this.myParam);
    this.service.findById(this.myParam).subscribe(res => {this.unMets = res},
        (err) => {
          console.log(err);
        });
  }
}
