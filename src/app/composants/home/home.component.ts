import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imagePath = '../../../assets/images/julietteEtChocolat.png';
  imagePathBanner = '../../../assets/images/jcBanner.png';
  constructor() { }

  ngOnInit(): void {
  }

}
