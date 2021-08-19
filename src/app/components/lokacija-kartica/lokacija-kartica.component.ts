import { Component, Input, OnInit } from '@angular/core';
import { Lokacija } from 'src/app/models/lokacija-model';
import {faStar, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state';
import { deleteLocation, setRating } from 'src/app/store/lokacija.actions';
import { selectLogin } from 'src/app/store/korisnik.selectors';

@Component({
  selector: 'app-lokacija-kartica',
  templateUrl: './lokacija-kartica.component.html',
  styleUrls: ['./lokacija-kartica.component.css']
})
export class LokacijaKarticaComponent implements OnInit {
  public starIcon = faStar;

  @Input() lokacija: Lokacija | null = null//= {id:0,naziv:"neko ime",opis:"neki opis",kategorija:"kategorija111",x:43.3209,y:21.8954,ocena:3}
  constructor(private store: Store<AppState>) { }
  @Input() public adminFlag:boolean = false;
  public trash = faTrashAlt;
  ngOnInit(): void {
  }

  getStarClass(id:number){
    if(this.lokacija)
    return id<= this.lokacija.ocena?"puna":"prazna";
    else
    return"Greska"
  }

  clickOnStar(rateid:number){
    let loged = 0;
     this.store.select(selectLogin).subscribe((value:number) => loged = value)

     if(loged == 0)
     {
      alert("Ova opcija je omogucena samo ulogovanim korisnicima.")
       return;
     }
  
    if(this.lokacija)
    {
      this.store.dispatch(setRating({
            location: this.lokacija,
            newRating: rateid
          }))
    }
    
    //this.lokacija.ocena = id;
  }


  obrisiLokaciju()
  {
    if (confirm('Kliknite OK ukoliko želite da izbrišete lokaciju.',)) {
      if(this.lokacija)
      this.store.dispatch(deleteLocation({id:this.lokacija.id}));
    } 
  }

}
