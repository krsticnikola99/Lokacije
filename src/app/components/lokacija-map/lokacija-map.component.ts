import { Component, Input, OnInit } from '@angular/core';
import { Lokacija } from 'src/app/models/lokacija-model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lokacija-map',
  templateUrl: './lokacija-map.component.html',
  styleUrls: ['./lokacija-map.component.css']
})
export class LokacijaMapComponent implements OnInit   {
@Input() centerX:number = 0;
@Input() centerY:number = 0;
@Input() query:string = "";
public mapCenter:string =  `${environment.mapUrl}center=${this.centerX},${this.centerY}`;// environment.mapUrl+"center=43.3209,21.8954";

  constructor() { }

  ngOnInit(): void {
    this.mapCenter =  this.centerX===0 && this.centerY === 0? `${environment.mapQuery}q=${this.query}`:`${environment.mapUrl}center=${this.centerX},${this.centerY}`;
  }

}
