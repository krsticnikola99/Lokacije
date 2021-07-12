import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lokacija } from '../models/lokacija-model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) { }


  public getAllLocation(){
    return  this.httpClient.get<Lokacija[]>(environment.apiUrl+"lokacije").pipe(
      catchError(errorHandler)
    )
  }

  public putLocation(lokacija:Lokacija){
    return this.httpClient.put<Lokacija>(environment.apiUrl+"lokacije/"+lokacija.id,lokacija,httpOptions);
  }

}

const errorHandler = (error: HttpErrorResponse) =>{
  const errorMessage = (error.status ===0)?
  'Cant connect to API'+ error.error:
  'Bakend returned code' + error.status;
  return throwError(errorMessage);
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
   // Authorization: 'my-auth-token'
  })
};
