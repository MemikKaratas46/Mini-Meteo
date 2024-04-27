
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-meteo-attuale',
  templateUrl: './meteo-attuale.component.html',
  styleUrls: ['./meteo-attuale.component.css']
})
export class MeteoAttualeComponent {
  query: string;
  title = 'first-routed-app';
  obsCW: Observable<Object>;
  results: any;

  constructor(private http:HttpClient) { 
  }
  Token='7985f94016a4f91f2fe8c898f0f8e9ab'
 
  submit(query: HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;

  this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&appid=${this.Token}&units=metric&lang=it`).subscribe(data => {
this.results=data
  });
  }
}

