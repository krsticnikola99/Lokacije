import { NgModule, ResolvedReflectiveFactory } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DodajlokacijuComponent } from './components/dodajlokaciju/dodajlokaciju.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { PrijavaComponent } from './components/prijava/prijava.component';

const routes: Routes = [
  {
  path:"pocetna",
  component:PocetnaComponent
  },
  {
    path:"prijava",
    component:PrijavaComponent
  }
  ,
  {
    path:"dodavanjelokacije",
    component:DodajlokacijuComponent
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


