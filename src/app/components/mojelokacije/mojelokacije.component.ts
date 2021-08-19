import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Korisnik } from 'src/app/models/korisnik-model';
import { Lokacija } from 'src/app/models/lokacija-model';
import { AppState } from 'src/app/store/app-state';
import { selectLoginState, selectUser } from 'src/app/store/korisnik.selectors';
import { selectAllLocations, selectMyLocations } from 'src/app/store/lokacija.selectors';

@Component({
  selector: 'app-mojelokacije',
  templateUrl: './mojelokacije.component.html',
  styleUrls: ['./mojelokacije.component.css']
})
export class MojelokacijeComponent implements OnInit {
  public user:Korisnik| null = {ime:"Nikola",prezime:"krstic",korisnickoIme:"krsta",sifra:"sifra",slika:"https://yt3.ggpht.com/yti/APfAmoGzE_SaPfLp4nb42tUbXfs9jC-mnHYhNKsmkXXobg=s88-c-k-c0x00ffffff-no-rj-mo"};
  public lokacije: Observable<readonly Lokacija[]> = of([]);
  constructor(private store: Store<AppState>,private router: Router) { }

  ngOnInit(): void {
    this.lokacije = this.store.select(selectMyLocations);
    this.store.select(selectLoginState).subscribe(state=>{
    
      if(state.ulogovan == 0)
      {
        this.router.navigate(['/prijava']);
      }
      else
      {
        this.user = state.korisnik;
      }

    })
  }

}
