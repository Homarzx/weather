import { Component } from '@angular/core';
import { WeatherapiService } from 'src/app/services/weatherapi.service';
import { Hourly } from 'src/app/interface/CurrentWeather';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component {

  public weather: any;
  //public wt: Hourly;
  


  constructor(private weatherapiService:WeatherapiService){
    weatherapiService.obtenerDatosParciales().subscribe(ans =>{
      this.weather =  ans;
      console.log(ans);
      //this.wt = ans;

    });
  }

}
