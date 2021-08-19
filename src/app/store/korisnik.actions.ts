
import { createAction, props } from "@ngrx/store"
import { Korisnik } from "../models/korisnik-model"

export const loadUserSuccess = createAction(
    "Load User Success",
     props<{
         korisnik: Korisnik[]
     }>()
    )

export const loadUserStart = createAction(
"Load User",
props<{
    korisnickoIme: string,
    sifra: string, 
}>()
)

export const logOut = createAction(
    "Log out"
    )




