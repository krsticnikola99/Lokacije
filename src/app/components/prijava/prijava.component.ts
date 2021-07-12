import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state';
import { loadUserStart } from 'src/app/store/korisnik.actions';


@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  public unosime:string="";
  public unossifra:string="";

  constructor(private store: Store<AppState>,private router: Router) { }

  ngOnInit(): void {
  }


  logIn()
  {
   
    if(this.unosime.length<3 || this.unossifra.length <3)
    {
      document.querySelector("span.validatemessage")?.classList.add("visibletrue");
      return;
    }
    else
    {
      document.querySelector("span.validatemessage")?.classList.remove("visibletrue");
      this.store.dispatch(loadUserStart({korisnickoIme:this.unosime,sifra:this.unossifra,ruterFunction:this.changeRoute}));
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
