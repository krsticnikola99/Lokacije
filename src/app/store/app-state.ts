import { KorisnikState } from "./korisnik.reducer";
import { LokacijaState } from "./lokacija.reducer";


export interface AppState{
    locations:LokacijaState,
    users:KorisnikState
}