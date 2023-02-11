import { Injectable } from '@angular/core';
import { PlacesService } from './places.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  url_api_comp1: string = 'https://my.meteoblue.com/packages/basic-day_current_clouds-day?apikey=3blfz9pMVNxWoOyU&lat=-2.19616&lon=-79.8862&asl=14&format=json&forecast_days=1';
  url_api_comp4: string = 'https://api.open-meteo.com/v1/forecast?latitude=-2.12&longitude=-79.92&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=America%2FNew_York';
  url_api_comp2: string = 'https://api.open-meteo.com/v1/forecast?latitude=-2.12&longitude=-79.92&hourly=temperature_2m,precipitation&current_weather=true&timezone=America%2FNew_York';

  public userLocation?: [number,number];

  constructor(private http: HttpClient) {}

  obtenerDatosTotales(){
    return this.http.get(this.url_api_comp1);
  }

  obtenerDatosSemanales(){
    return this.http.get(this.url_api_comp4);
  }

  obtenerDatosParciales(){
    return this.http.get(this.url_api_comp2);
  }

}
