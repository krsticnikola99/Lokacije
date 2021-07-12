import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Korisnik } from '../models/korisnik-model';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private httpClient: HttpClient) { }

  public getUser(korisnickoIme:string, sifra:string){
    return  this.httpClient.get<Korisnik[]>(`${environment.apiUrl}korisnici/?korisnickoIme=${korisnickoIme}&sifra=${sifra}`).pipe(
      catchError(errorHandler)
    )
  }
}


const errorHandler = (error: HttpErrorResponse) =>{
  const errorMessage = (error.status ===0)?
  'Cant connect to API'+ error.error:
  'Bakend returned code' + error.status;
  return throwError(errorMessage);
}
