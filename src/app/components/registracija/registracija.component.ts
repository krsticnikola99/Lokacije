import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, filter, map, switchMap } from 'rxjs/operators';
import { Korisnik } from 'src/app/models/korisnik-model';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { korisnikReducer } from 'src/app/store/korisnik.reducer';
import { environment } from 'src/environments/environment';

;

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
  public validateMessage ="";
  nalog:Korisnik ={korisnickoIme:"",ime:"",prezime:"",sifra:"",slika:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"};
  ponovljenaSifra:string ="";
  usernameValidationCorrectly:string ="";
  usernameValidationNotCorrectly:string = "";
  checkCircle = faCheckCircle;
  timesCircle = faTimesCircle;
  usernameSubject:Subject<string> = new Subject();
  public novaslika: FileList | null=null;
  public promenjenaSlika:Boolean = false;
  constructor(private service:KorisnikService,private router: Router) { }

  ngOnInit(): void {
    this.usernameSubject.pipe(
      debounceTime(500),
      filter(text=> text.length > 3),
      switchMap(text=>this.service.checkUsername(text))
    ).subscribe(
      users=>{
        if(users.length > 0)
        {
          this.usernameValidationNotCorrectly="usernameVisible";
          this.usernameValidationCorrectly =""
        }
        else
        {
          this.usernameValidationNotCorrectly="";
          this.usernameValidationCorrectly ="usernameVisible"
        }
      }
    )
  }

  updateKorisnickoIme(event:Event)
  {
    this.nalog.korisnickoIme = (event.target as HTMLInputElement).value;
    if(this.nalog.korisnickoIme.length > 3)
     this.usernameSubject.next(this.nalog.korisnickoIme);
    else
    {
      this.usernameValidationNotCorrectly="";
      this.usernameValidationCorrectly =""
    }
    
   
  }
  updateIme(event:Event)
  {
    this.nalog.ime = (event.target as HTMLInputElement).value;
  }
  updatePrezime(event:Event)
  {
    this.nalog.prezime = (event.target as HTMLInputElement).value;
  }
  updateSifra(event:Event)
  {
    this.nalog.sifra = (event.target as HTMLInputElement).value;
  }
  updateSifraR(event:Event)
  {
    this.ponovljenaSifra = (event.target as HTMLInputElement).value;
  }
  updateImg(event:Event){

    this.novaslika = (event.target as HTMLInputElement).files;

    if (FileReader && this.novaslika && this.novaslika.length) {
      var fr = new FileReader();

      fr.onload = ()=>{
        if(this.nalog)
        {
          this.nalog = {...this.nalog,slika: fr.result};
          this.promenjenaSlika = true;
        }
      }
      fr.readAsDataURL(this.novaslika[0]);
   }
    
  }

  registrujSe()
  {
    if(this.usernameValidationCorrectly == "usernameVisible" && this.nalog.ime.length> 3 && this.nalog.prezime.length >3 && this.nalog.sifra.length >3)
    {
      if(this.nalog.sifra == this.ponovljenaSifra)
      {
        
        if(this.promenjenaSlika==true)
        {
          this.service.uploadImage(<ArrayBuffer><unknown>this.nalog.slika).subscribe(returnedValue=>
            {
              const imgsrc:string =environment.imageURL + returnedValue.novoime;
               if(this.nalog)
               {
                 this.sacuvajNalog({...this.nalog,slika:imgsrc});
               }
            }      
          )
        }
        else
        {
          this.sacuvajNalog(this.nalog);
        }
      
      }
      else
      {
        this.validateMessage = "Lozinke se ne poklapaju!";
      }
    }
    else{
      this.validateMessage="Nisu popunjena sva polja!";
    }

  }



  sacuvajNalog(nalog:Korisnik){
    this.service.insertUser(nalog).subscribe(user=> {
      this.router.navigate(['/pocetna']);
      if(user)
      {
        alert("Uspešno ste napravili nalog!");
      }
      else
      {
        alert("Došlo je do greške, pokušajte ponovo.");
      }
    })
  }

  


}
