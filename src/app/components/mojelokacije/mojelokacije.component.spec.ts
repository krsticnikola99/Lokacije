import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojelokacijeComponent } from './mojelokacije.component';

describe('MojelokacijeComponent', () => {
  let component: MojelokacijeComponent;
  let fixture: ComponentFixture<MojelokacijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojelokacijeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MojelokacijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
