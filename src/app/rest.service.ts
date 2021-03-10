import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import{ Moment} from 'moment'
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';


const endpoint = 'http://localhost:8000/api/';
const subject = webSocket("ws://localhost:8000/ws/weather");
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }


  setCoord(): Observable<any>{
    
    return this.http.get(`${environment.baseURL}coord/cities`).pipe(catchError(this.handleError));
    
  }

  getWeather(){


      return this.http.get(`${environment.baseURL}weather/cities`).pipe(
        catchError(this.handleError));

  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }


}

