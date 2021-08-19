import { NgModule, ResolvedReflectiveFactory } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DodajlokacijuComponent } from './components/dodajlokaciju/dodajlokaciju.component';
import { MojelokacijeComponent } from './components/mojelokacije/mojelokacije.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { PrijavaComponent } from './components/prijava/prijava.component';
import { RegistracijaComponent } from './components/registracija/registracija.component';

const routes: Routes = [
  {
  path:"pocetna",
  component:PocetnaComponent
  },
  {
    path:"prijava",
    component:PrijavaComponent
  },
  {
    path:"dodavanjelokacije",
    component:DodajlokacijuComponent
  },
  {
    path:"mojelokacije",
    component:MojelokacijeComponent
  },
  {
    path:"registracija",
    component:RegistracijaComponent
  },
  {
    path:"**",
    component:PocetnaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router){}
     redirect(path: string){
       this.router.navigate([path])
    }
 }


