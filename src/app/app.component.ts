import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app-state';
import { selectLogin, selectUser } from './store/korisnik.selectors';
import { loadLocationsStart } from './store/lokacija.actions';
import { logOut } from './store/korisnik.actions';
import { Korisnik } from './models/korisnik-model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GtcWeb';
  public korisnik: Korisnik| null = null;

  constructor(private store: Store<AppState>){}

  ngOnInit(){
    this.store.dispatch(loadLocationsStart());
    this.store.select(selectUser).subscribe(korisnik=> this.korisnik = korisnik.ime!='Nema'?korisnik:null)
  }
  
  isLoged()
  {
    return  this.store.select(selectLogin);
  }

  odjaviSe()
  {
    this.store.dispatch(logOut());
  }



}
