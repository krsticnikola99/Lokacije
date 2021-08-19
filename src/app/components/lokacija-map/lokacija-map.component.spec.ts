import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LokacijaMapComponent } from './lokacija-map.component';

describe('LokacijaMapComponent', () => {
  let component: LokacijaMapComponent;
  let fixture: ComponentFixture<LokacijaMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LokacijaMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LokacijaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
