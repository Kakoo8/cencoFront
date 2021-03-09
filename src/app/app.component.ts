
import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { RestService} from './rest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cencoFront';
  
  cities = ['London', 'Santiago', 'Zurich', 'Auckland', 'Sydney', 'Georgia']
  citiesW = [""]
 
  weatherOfCities: any=[];
  
   constructor(
    public rest: RestService,
    private router: Router) { }


  ngOnInit():void{

    
    
    this.get_weathers()
    
    
  }
 

  get_weathers(){

    for(let i in this.cities){

      this.rest.getWeather(this.cities[i]).subscribe(res => this.weatherOfCities[i]= res)
      
      
    }
    
   
  }


}
