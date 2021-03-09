import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import{ Moment} from 'moment'

const endpoint = 'http://localhost:8000/api/';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }


  setCoord(): Observable<any>{
    
    return this.http.get(`${environment.baseURL}coord/cities`).pipe(catchError(this.handleError));
    
  }

  getWeather(city: string){


      return this.http.get(`${environment.baseURL}weather/${city}`).pipe(
        catchError(this.handleError));

  }
  setErrorLog(city: string){
  
    
    this.http.post(`${environment.baseURL}/error`, {
      params:{
        'hora': `Error consulting ${city}`
        
      }
    })
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
