import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-tutoriels',
  templateUrl: './tutoriels.component.html',
  styleUrls: ['./tutoriels.component.css']
})
export class TutorielsComponent implements OnInit {
  myParam:string;
  angular:string ='angular';
  crud:string='crud';
  relations:string='relations';
  texte:string;

  //Tutoriel Angular
  tableauTexte:string[] = ['Fichiers de méta-données', 'Fichier angular.json', 'Fichier package.json', 'Tableau de modules du fichier app.module.ts'];
  tableauTexteComposant:string[] = ['Exemple de directives et interpollation', 'Un Composant']
  tableauCartesUtilisationAngular = ['assets/imagesTuto/metaData.PNG', 'assets/imagesTuto/angularJson.PNG', 'assets/imagesTuto/packageJson.PNG', 'assets/imagesTuto/modules.PNG']
  tableauCartesComposant = ['assets/imagesTuto/directive.PNG', 'assets/imagesTuto/composant.PNG']
  
  //Tutoriel Crud
  tableauCartesRoute:string[] = ['assets/imagesTuto/routes.PNG', 'assets/imagesTuto/routeChild.PNG','assets/imagesTuto/activatedRoute.PNG'];
  tableauTexteExempleCrud = ['Exemple create','Exemple read', 'Exemple update', 'Exemple delete'];
  tableauCartesExempleCrud = ['assets/imagesTuto/formCreate.PNG','assets/imagesTuto/affichageGet.PNG', 'assets/imagesTuto/formUpdate.PNG', 'assets/imagesTuto/crudDelete.PNG'];
  
  tableauTexteRoute:string[] = ['Le tableau de Routes dans app-routing.module.ts','L\'enfant d\'une route.', 'Une route activée'];
  tableauCartesCrud:string[] = ['assets/imagesTuto/create.PNG', 'assets/imagesTuto/read.PNG', 'assets/imagesTuto/update.PNG', 'assets/imagesTuto/delete.PNG'];
  optionsCrud:string[] = ['Create', 'Read', 'Update', 'Delete'];
  //Tutoriel Relations
  tableauCartesRelations:string[] = ['assets/imagesTuto/Encapsulation.PNG', 'assets/imagesTuto/abstraction.PNG'];
  tableauTexteRelations:string[] = ['Héritage et encapsulation', 'Abstraction'];
  tableauCartesMultiplicite:string[] = ['assets/imagesTuto/unAun.PNG', 'assets/imagesTuto/unAplus.PNG', 'assets/imagesTuto/manytomany.PNG'];
  tableauTexteMultiplicite:string[] = ['Un à un', 'Un à plusieurs', 'Plusieurs à Plusieurs'];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>
    this.myParam = params.tutoChoisit);
  }

}
