import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
//import { Actions } from "@ngrx/store-devtools/src/reducer";
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { LocationService } from "src/app/services/location.service";
import { AppRoutingModule } from "../app-routing.module";
import * as LocationActions from "./lokacija.actions"




@Injectable()
export class LocationEffect {

    constructor(private locationService: LocationService, private actions$: Actions) { }

    loadEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LocationActions.loadLocationsStart),
            mergeMap(() => this.locationService.getAllLocation()
            
                .pipe(
                    map((locations) => (LocationActions.loadLocationsSuccess({locations}))),
                    catchError(() => of({ type: "load error" }))
                )
            )
        )
    )

    updateEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LocationActions.setRating),
            mergeMap((action) => this.locationService.putLocation({...action.location, ocena: action.newRating})
                .pipe(
                    map((location) => LocationActions.putLocationSuccess({location})),
                    catchError(() => of({ type: "put error" }))
                )
            )
        )
    )

    insertLocationEffect$ = createEffect(() =>
    this.actions$.pipe(
        ofType(LocationActions.insertLocation),
        mergeMap((action) => this.locationService.insertLocation(action.location)
            .pipe(
                map((location) => LocationActions.insertLocationSuccess({location})),
                catchError(() => of({ type: "insert error" }))
            )
        )
    )
)

deleteLocationEffect$ = createEffect(() =>
this.actions$.pipe(
    ofType(LocationActions.deleteLocation),
    
    mergeMap((action) => this.locationService.deletelocation(action.id)

        .pipe(
            map(() => (LocationActions.deleteLocationSuccess({id:action.id}))),
            catchError(() => of({ type: "Delete location error" }))
        )
    
    )
)
)


}

