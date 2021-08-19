import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LokacijaKarticaComponent } from './lokacija-kartica.component';

describe('LokacijaKarticaComponent', () => {
  let component: LokacijaKarticaComponent;
  let fixture: ComponentFixture<LokacijaKarticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LokacijaKarticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LokacijaKarticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
