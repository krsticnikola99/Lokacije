import { createAction, props } from "@ngrx/store"
import { Lokacija } from "../models/lokacija-model"

export const loadLocationsSuccess = createAction(
    "Load Locations Success",
     props<{
         locations: Lokacija[]
     }>()
    )

export const loadLocationsStart = createAction(
"Load Locations"
)

export const setRating = createAction(
    "Set Rating",
    props<{
        location: Lokacija,
        newRating: number
    }>()
)

export const putLocationSuccess = createAction(
    "Put Location Success",
    props<{
        location: Lokacija
    }>()
 )

 export const insertLocation = createAction(
    "Insert Location",
    props<{
        location:Lokacija
    }>()
)
