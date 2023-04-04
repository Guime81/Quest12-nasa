import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';
import { ImgNasa } from 'src/model/imgNasa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = "Image from API's NASA";
  imgOfTheDay: ImgNasa = new ImgNasa();
  constructor(public nasaService: NasaService) {}

  ngOnInit(): void {
    // .suscribe = .then du fetch
    this.nasaService.getImageOfTheDay().subscribe((response) => {
      this.imgOfTheDay = response;
    });
  }
}
