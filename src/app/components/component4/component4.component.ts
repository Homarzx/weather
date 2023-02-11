import { Component } from '@angular/core';
import { WeatherapiService } from 'src/app/services/weatherapi.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component {

  public weather: any;


  constructor(private weatherapiService:WeatherapiService){
    weatherapiService.obtenerDatosSemanales().subscribe(ans =>{
      this.weather =  ans;
    });
  }

}
