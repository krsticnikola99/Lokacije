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
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(lokacija);
    return this.httpClient.put<Lokacija>(environment.apiUrl+"lokacije/"+lokacija.id,body,{'headers':headers});
  }

  public insertLocation(lokacija:Lokacija){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(lokacija);
    return this.httpClient.post<Lokacija>(environment.apiUrl+"lokacije/",body,{'headers':headers});
  }

  public deletelocation(id:number)
  {
    return this.httpClient.delete(environment.apiUrl+"lokacije/"+id);
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
