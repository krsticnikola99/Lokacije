import { Router, RouterLink } from "@angular/router";
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { AppRoutingModule } from "../app-routing.module";
import { Korisnik } from "../models/korisnik-model";

import * as Actions from "./korisnik.actions"

export interface KorisnikState{
    korisnik:Korisnik
    ulogovan:number
}

const adapter = createEntityAdapter<Korisnik>();

export const initialState: KorisnikState = {korisnik:{korisnickoIme:"Nema",ime:"Nema",prezime:"Nema",sifra:"Nema",slika:"Nema"}, ulogovan:0};

export const korisnikReducer = createReducer(
    initialState,
    on(Actions.loadUserSuccess, (state, { korisnik,ruterFunction}) => {
        if (korisnik.length > 0) {
            document.querySelector("span.validatemessage")?.classList.remove("visibletrue");
           // window.location.href="../pocetna"; 
            //ruter.navigate(['/pocetna']);
            ruterFunction();
            return ({
                ...state,
                korisnik: korisnik[0],//json server vraca uvek niz korisnika, dokazi do greske
                ulogovan:1
            })
        }

        else {
            document.querySelector("span.validatemessage")?.classList.add("visibletrue");
            return initialState
        }

    }),
    on(Actions.logOut,(state) => ({...state,ulogovan:0,korisnik:initialState.korisnik}))
  
);