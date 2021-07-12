import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajlokacijuComponent } from './dodajlokaciju.component';

describe('DodajlokacijuComponent', () => {
  let component: DodajlokacijuComponent;
  let fixture: ComponentFixture<DodajlokacijuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajlokacijuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajlokacijuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
