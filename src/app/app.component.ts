
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
  subject = webSocket("ws://localhost:8000/ws/weather");
  
  title = 'cencoFront';
  listen= true
  cities = ['London', 'Santiago', 'Zurich', 'Auckland', 'Sydney', 'Georgia']
  citiesW = [""]
  source = interval(10000);
 
  weatherOfCities: any=[];
  messages: any = [];


  connection$?: WebSocketSubject<any>;
  RETRY_SECONDS = 10;
  connect(): Observable<any> {

    this.connection$ = webSocket("ws://localhost:8000/ws/weather");
    return this.connection$;


     }
   constructor(
    public rest: RestService,
    private router: Router, 
   ) { this.subject.subscribe(messages => this.messages = messages)}
    




  ngOnInit():void{

    
    

    

    
  }
  
  
  always():void{
   
    this.subject.subscribe(messages => this.messages = messages)
 
  }

 

 

}
