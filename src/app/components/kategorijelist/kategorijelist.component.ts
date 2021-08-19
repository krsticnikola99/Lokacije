import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBrain, faFeatherAlt, faMoneyBillWave, faChalkboardTeacher,faClock    ,faFutbol, faTree, faMountain,faSuitcaseRolling} from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state';

@Component({
  selector: 'app-kategorijelist',
  templateUrl: './kategorijelist.component.html',
  styleUrls: ['./kategorijelist.component.css']
})
export class KategorijelistComponent implements OnInit {

  public sportIcon = faFutbol;
  public izletIcon = faTree;
  public planinarenjeIcon = faMountain;
  public turizamIcon = faSuitcaseRolling;
  public najnovijeIcon = faClock;
  @Input() newPage:boolean = false;

  constructor(private router: Router,private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onClickKategorija(kategorija:string){
    this.router.navigate(["/pocetna"], { queryParams: { kategorija: kategorija }} );
  //  window.scrollTo(0,0);
 

  }

}
