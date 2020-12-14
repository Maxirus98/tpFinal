import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './composants/not-found/not-found.component';
import { HomeComponent } from './composants/home/home.component';
import { TutorielsComponent } from './composants/tutoriels/tutoriels.component';
import { FormulaireComponent } from './composants/formulaire/formulaire.component';
import { CrudComponent } from './composants/crud/crud.component';
import { FunContactComponent } from './composants/fun-contact/fun-contact.component';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { FooterComponent } from './composants/footer/footer.component';
import { AffichageComponent } from './composants/affichage/affichage.component';
import { ModifierComponent } from './composants/modifier/modifier.component';
import { ConfirmationComponent } from './composants/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    TutorielsComponent,
    FormulaireComponent,
    CrudComponent,
    FunContactComponent,
    NavbarComponent,
    FooterComponent,
    AffichageComponent,
    ModifierComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
