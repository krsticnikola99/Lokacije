import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { Lokacija } from "../models/lokacija-model";
import * as Actions from "./lokacija.actions"

export interface LokacijaState extends EntityState<Lokacija>{

}

const adapter = createEntityAdapter<Lokacija>();

export const initialState: LokacijaState = adapter.getInitialState();

export const lokacijaReducer = createReducer(
    initialState,
    on(Actions.loadLocationsSuccess,(state,{locations}) => adapter.setAll(locations,state)),
    on(Actions.setRating, (state, {location, newRating}) =>{
        const targetLocation = state.entities[location.id];
        if(targetLocation)
        {

            return adapter.setOne({...targetLocation, ocena: newRating}, state)
        }
        else
        return state;
    }),
    on(Actions.insertLocation,(state,{location}) => adapter.setOne(location,state))

);