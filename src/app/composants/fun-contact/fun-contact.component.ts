import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employeur } from 'src/app/model/employeur';
import {ContactService} from '../../services/contact.service';
@Component({
  selector: 'app-fun-contact',
  templateUrl: './fun-contact.component.html',
  styleUrls: ['./fun-contact.component.css']
})
export class FunContactComponent implements OnInit {
  imagePath:string = 'assets/images/jc2.jpg';
  imageCV:string = 'assets/images/cv.PNG';
  imageLP:string = 'assets/images/lettreDePresentation.PNG';
  cvVisible:boolean;
  lpVisible:boolean;
  messageValidation:string = '';
  unEmployeur:Employeur;
  contactForm = new FormGroup({
    nom: new FormControl('', 
      [Validators.required, Validators.minLength(2),
       Validators.pattern("^[a-zA-Z]+$")]),
    prenom: new FormControl('', [Validators.required,  Validators.minLength(2),
      Validators.pattern("^[a-zA-Z]+$")]),
      courriel: new FormControl('',[Validators.required]),
      message: new FormControl('')
  });
  constructor(private service:ContactService, private router:Router) { }

  ngOnInit(): void {
    this.cvVisible = false;
    this.lpVisible = false;
  }

  rendreCvVisible(){
      if(this.cvVisible){
        this.cvVisible = false;
      }
      else{
        this.cvVisible = true;
      }
  }

  rendreLpVisible(){
    if(this.lpVisible){
      this.lpVisible = false;
    }
    else{
      this.lpVisible = true;
    }
  }

  onSubmit(){
    if(this.contactForm.valid){
      this.service.create(this.contactForm.value).subscribe(data => {
        this.unEmployeur = new Employeur();
        this.router.navigateByUrl('/confirmation');
      },
        (err) => {
          console.log(err);
        })
    }
    else{
        this.messageValidation = "Veuillez bien remplir le formulaire d'abord.";
        console.log(this.contactForm.value)
    }
  }
}
