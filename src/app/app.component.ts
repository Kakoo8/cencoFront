
import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

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
  counter = interval(10000);
  messages: any = [];
  weathers: any=[];




  constructor(
    
    private router: Router, 
   ) { }
    

  ngOnInit(){


     this.counter.subscribe(n =>      this.consulting());

   }

   consulting(){

     this.subject.subscribe(messages => this.messages = messages)
     for(let i in this.messages ){
       if(this.messages[i] != null){
         this.weathers[i]= this.messages[i]
       }
     }

     setTimeout(() => this.subject.complete(), 5000);



   }


    

    
  
  
  

 

 

}
