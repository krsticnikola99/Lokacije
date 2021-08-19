import { createSelector, props } from "@ngrx/store";
import { Lokacija } from "../models/lokacija-model";
import { AppState } from "./app-state";
import { selectUserFeature } from "./korisnik.selectors";

export const selectLocationsFeature = (state: AppState) => state.locations;

export const selectAllLocations= createSelector(
    selectLocationsFeature,
(state) => Object.values(state.entities)
.filter(lokacija => lokacija != null)
.map(lokacija=> <Lokacija> lokacija)
);

export const selectMyLocations= createSelector(
    selectLocationsFeature,
    selectUserFeature,
(locationState,userState) => Object.values(locationState.entities)
.filter(lokacija=> lokacija?.idKreatora == userState.korisnik.korisnickoIme)
.filter(lokacija => lokacija != null)
.map(lokacija=> <Lokacija> lokacija)
);

export const selectMaxId =createSelector(
    selectLocationsFeature,
    (state)=> state.ids
    .length  
)
