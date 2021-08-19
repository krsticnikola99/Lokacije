import { createSelector } from "@ngrx/store";
import { AppState } from "./app-state";
import { KorisnikState } from "./korisnik.reducer";

export const selectUserFeature = (state: AppState) => state.users;

export const selectUser = createSelector(
    selectUserFeature,
    (state)=> state.korisnik
    );

export const selectLogin = createSelector(
    selectUserFeature,
    (state)=> state.ulogovan
    );

    export const selectLoginState = createSelector(
        selectUserFeature,
        (state)=> state
        );

 

