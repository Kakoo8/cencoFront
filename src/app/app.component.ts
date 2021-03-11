
import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { RestService} from './rest.service';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ws = "ws://localhost:8000/ws/weather"
  subject = webSocket(this.ws);
  
  title = 'cencoFront';
 
  cities = ['London', 'Santiago', 'Zurich', 'Auckland', 'Sydney', 'Georgia']
  citiesW = [""]
  counter = interval(10000);
 
  weatherOfCities: any=[];
  messages: any = [];



   constructor(
    public rest: RestService,
    private router: Router, 
   ) { }
    

   ngOnInit(){


     this.counter.subscribe(n =>      this.consulting());

   }

   consulting(){

     this.subject.subscribe(messages => this.messages = messages)
     setTimeout(() => this.subject.complete(), 5000);



   }


    

    
  
  
  

 

 

}
