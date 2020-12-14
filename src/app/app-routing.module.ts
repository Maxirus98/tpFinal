import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffichageComponent } from './composants/affichage/affichage.component';
import { ConfirmationComponent } from './composants/confirmation/confirmation.component';
import { CrudComponent } from './composants/crud/crud.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import { FunContactComponent } from './composants/fun-contact/fun-contact.component';
import { HomeComponent } from './composants/home/home.component';
import { ModifierComponent } from './composants/modifier/modifier.component';
import { NotFoundComponent } from './composants/not-found/not-found.component';
import { TutorielsComponent } from './composants/tutoriels/tutoriels.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'crud', component:CrudComponent},
  {path:'formulaire', component:FormulaireComponent},
  {path: 'contact', component: FunContactComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'affichage/:id', component: AffichageComponent},
  {path: 'modifier/:id', component: ModifierComponent},
  {path: 'tutoriels',
  children:[
    {path:':tutoChoisit',
    component: TutorielsComponent
    },
    {path:':tutoChoisit',
    component: TutorielsComponent
    },
    {path:':tutoChoisit',
    component: TutorielsComponent
    }
  ]},
  {path: '',   redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
