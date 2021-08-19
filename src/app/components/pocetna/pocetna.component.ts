import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { interval, Observable, of } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { Lokacija } from 'src/app/models/lokacija-model';
import { LocationService } from 'src/app/services/location.service';
import { AppState } from 'src/app/store/app-state';
import { selectAllLocations } from 'src/app/store/lokacija.selectors';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {
  public lokacije: Observable<readonly Lokacija[]> = of([]);
  public welcomeMessage:string="";
  constructor(private store:Store<AppState>, private lokacijaService: LocationService, private route: ActivatedRoute,private router: Router) { }
 // public lokacijaproba:Lokacija = {id:0,naziv:"neko ime",opis:"neki opis",kategorija:"kategorija111",x:43.3209,y:21.8954,ocena:3}
  ngOnInit(): void {
    this.lokacije = this.store.select(selectAllLocations);
   
    interval(4000).pipe(
      map(el=> this.welcomeMessage =""),
      switchMap(e=> this.ispisiText("Dobrodošli...")))
      .subscribe((el) => this.welcomeMessage = this.welcomeMessage+el)


      this.route.queryParams.pipe(
        map(params=>params.kategorija)
      )
       .subscribe(param=>{


        if(param =="Najnovije")
        {
          this.lokacije = this.store.select(selectAllLocations).pipe(
            map(locations=>locations.sort((a:Lokacija,b:Lokacija)=> b.datum-a.datum ))
          )
        }
        else if(!param)
        {
          this.router.navigate(["/pocetna"], { queryParams: { kategorija: "Najnovije" }} )
        }
        else
        {
          this.lokacije = this.store.select(selectAllLocations).pipe(
           map(locations=> locations.filter(location=>location.kategorija==param))
         )
        }
         
         
      
     })

  }
  
  ispisiText(text: string): Observable<string> {
    return interval(150).pipe(
      take(text.length),
      map((id: number) => text[id])
    )

}

}


