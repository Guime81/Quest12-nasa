import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(public http: HttpClient) {}

  getImageOfTheDay(): Observable<object> {
    return this.http.get<object>(
      'https://api.nasa.gov/planetary/apod?api_key=cnP617Ifao8B8HcghoU1XJPE63XaFLykEHmZ5lUO'
    );
  }
}
