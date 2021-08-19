import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Korisnik } from 'src/app/models/korisnik-model';
import { AppState } from 'src/app/store/app-state';
import { loadUserStart } from 'src/app/store/korisnik.actions';
import * as Effects from "src/app/store/korisnik.effects"

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  public unosime:string="";
  public unossifra:string="";
  public validateMessageVisible =""

  constructor(private store: Store<AppState>,private router: Router, private effects:Effects.KorisnikEffect) { }

  ngOnInit(): void {
    this.effects.loadEffect$.pipe(
      map(eff=> ({...eff}))
    ).subscribe(effect=>{
        
      if((<{korisnik: Korisnik[]; type: "Load User Success";}><unknown>effect).korisnik.length > 0)
      {
        this.router.navigate(["/pocetna"], { queryParams: { kategorija: "Najnovije" }} );
      }
      else{
        this.validateMessageVisible = "visibletrue";
       // document.querySelector("span.validatemessage")?.classList.add("visibletrue");
      }

    });
  }


  logIn()
  {
   
    if(this.unosime.length<3 || this.unossifra.length <3)
    {
      this.validateMessageVisible = "visibletrue";
      return;
    }
    else
    {
      this.validateMessageVisible = "";
      this.store.dispatch(loadUserStart({korisnickoIme:this.unosime,sifra:this.unossifra}));
    }
  }

  updateKorisnickoIme(event:Event)
  {
    this.unosime = (event.target as HTMLInputElement).value;
  }
  updateSifra(event:Event)
  {
    this.unossifra = (event.target as HTMLInputElement).value;
  }

   changeRoute = ()=>{
    this.router.navigate(['/pocetna']);
  }

}
