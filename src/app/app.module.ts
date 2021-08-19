import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { PrijavaComponent } from './components/prijava/prijava.component';
import { LokacijaKarticaComponent } from './components/lokacija-kartica/lokacija-kartica.component';
import { LokacijaMapComponent } from './components/lokacija-map/lokacija-map.component';
import { SafePipePipe } from './safe-pipe.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { LocationService } from './services/location.service';
import { StoreModule } from '@ngrx/store';
import { lokacijaReducer } from './store/lokacija.reducer';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { LocationEffect } from './store/lokacija.effects';
import { korisnikReducer } from './store/korisnik.reducer';
import { KorisnikEffect } from './store/korisnik.effects';
import { DodajlokacijuComponent } from './components/dodajlokaciju/dodajlokaciju.component';
import { MojelokacijeComponent } from './components/mojelokacije/mojelokacije.component';
import { KategorijelistComponent } from './components/kategorijelist/kategorijelist.component';
import { RegistracijaComponent } from './components/registracija/registracija.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    PrijavaComponent,
    LokacijaKarticaComponent,
    LokacijaMapComponent,
    SafePipePipe,
    DodajlokacijuComponent,
    MojelokacijeComponent,
    KategorijelistComponent,
    RegistracijaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    StoreModule.forRoot({locations: lokacijaReducer, users: korisnikReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([LocationEffect,KorisnikEffect])
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
