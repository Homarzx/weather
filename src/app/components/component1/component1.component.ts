import { Component } from '@angular/core';
import { WeatherapiService } from 'src/app/services/weatherapi.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  
  public weather: any;


  constructor(private weatherapiService:WeatherapiService){
    weatherapiService.obtenerDatosTotales().subscribe(ans =>{
      this.weather =  ans;
    });
  }
}
