import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijelistComponent } from './kategorijelist.component';

describe('KategorijelistComponent', () => {
  let component: KategorijelistComponent;
  let fixture: ComponentFixture<KategorijelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KategorijelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
