import { Component } from '@angular/core';
import { WeatherapiService } from 'src/app/services/weatherapi.service';
import { Hourly } from 'src/app/interface/CurrentWeather';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {

  public weather: any;
  //public wt: Hourly;
  


  constructor(private weatherapiService:WeatherapiService){
    weatherapiService.obtenerDatosParciales().subscribe(ans =>{
      this.weather =  ans;
      console.log(ans);
    });
  }

}
