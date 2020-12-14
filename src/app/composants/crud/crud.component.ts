import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import{MetsService} from '../../services/mets.service';
import{Mets} from '../../model/mets';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public enTetes = ['#', 'Nom', 'Ingrédients', 'Type', 'Remarque', 'C.R.U.D'];
  imagePath = "assets/images/fondu.jpg";
  menuMets:Mets[];
  unMet:Mets
  constructor(private service:MetsService, private router:Router) { 
  }

  public supprimerMet(id:number, i:any){
    if(window.confirm('Are you sure?')){
      this.service.deleteById(id).subscribe(resultat => {
        this.menuMets.splice(i, 1);
        },
        (err) => {
          console.log(err);
        });
    }
  }

  public trouverUnSeulMet(id:number, page:string){
    this.service.findById(id).subscribe(res => {this.unMet = res},
      (err) => {
        console.log(err);
      });
      this.router.navigateByUrl('/'+page+'/'+id);
  }

  trouverTousLesMets(){
    this.service.findAll().subscribe(data => this.menuMets = data)
  }
  ngOnInit(): void {
    this.trouverTousLesMets();
  }

}
