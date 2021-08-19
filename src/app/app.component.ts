import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app-state';
import { selectLogin, selectUser } from './store/korisnik.selectors';
import { loadLocationsStart } from './store/lokacija.actions';
import { logOut } from './store/korisnik.actions';
import { Korisnik } from './models/korisnik-model';
import { Observable, of ,fromEvent} from 'rxjs';
import { Scroll } from '@angular/router';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GtcWeb';
  public korisnik: Korisnik| null = null;
  oboji:string="";
  constructor(private store: Store<AppState>){}

  ngOnInit(){
    this.store.dispatch(loadLocationsStart());
    this.store.select(selectUser).subscribe(korisnik=> this.korisnik = korisnik.ime!='Nema'?korisnik:null);

    fromEvent(window,"scroll").pipe(
      debounceTime(10)
    ).subscribe(
      ()=>{
        if(window.scrollY>200)
        {
          this.oboji="oboji";
        }
        else
        {
          this.oboji="";
        }
      })
 
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
