import { NgModuleResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Lokacija } from 'src/app/models/lokacija-model';
import { AppState } from 'src/app/store/app-state';
import { insertLocation } from 'src/app/store/lokacija.actions';
import { selectMaxId } from 'src/app/store/lokacija.selectors';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dodajlokaciju',
  templateUrl: './dodajlokaciju.component.html',
  styleUrls: ['./dodajlokaciju.component.css']
})
export class DodajlokacijuComponent implements OnInit {

  lokacija:Lokacija = {id:100,naziv:"",kategorija:"",opis:"",x:0,y:0,ocena:0,query:""}
  pretragaString:string = "Nis";
  mapLink:string = environment.mapQuery+"q=Nis"; 
  constructor(private store: Store<AppState>,private router: Router) { }

  ngOnInit(): void {
    this.store.select(selectMaxId).subscribe(maxValue=>
      this.lokacija.id = maxValue+1
      )
  }

  updateNaziv(event:Event)
  {
    this.lokacija.naziv = (event.target as HTMLInputElement).value;
  }

  updateKategorija(event:Event)
  {
    this.lokacija.kategorija = (event.target as HTMLInputElement).value;
  }

  updateOpis(event:Event)
  {
    this.lokacija.opis = (event.target as HTMLInputElement).value;
  }
  updatePretraga(event:Event)
  {
    this.pretragaString = (event.target as HTMLInputElement).value;
  }

  pretraziLokaciju(){
    this.lokacija.query = this.pretragaString.split(' ').join('+');
    this.mapLink = environment.mapQuery+"q="+  this.lokacija.query;

  }

  dodajLokaciju(){
    if(this.lokacija.query.length == 0)
      this.lokacija.query="Nis"
      
      if(this.lokacija.naziv.length<3 || this.lokacija.opis.length <3 || this.lokacija.kategorija.length < 3)
      {
        document.querySelector("span.validatemessage")?.classList.add("visibletrue");
        return;
      }
      else
      {
        document.querySelector("span.validatemessage")?.classList.remove("visibletrue");
        this.store.dispatch(insertLocation({location:this.lokacija}))
        this.router.navigate(['/pocetna']);
      }

    
  }


}
