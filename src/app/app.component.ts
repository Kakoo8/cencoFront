
import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { RestService} from './rest.service';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  subject = webSocket("ws://localhost:8000/ws/weather");
  title = 'cencoFront';
  listen= true
  cities = ['London', 'Santiago', 'Zurich', 'Auckland', 'Sydney', 'Georgia']
  citiesW = [""]
 
  weatherOfCities: any=[];
  messages: any = [];
   constructor(
    public rest: RestService,
    private router: Router, 
    ) { }


  ngOnInit():void{

    
    this.subject.subscribe(messages => this.messages=messages)
    
    
    
  }
  
  
  always():void{
    

   
  }




}
