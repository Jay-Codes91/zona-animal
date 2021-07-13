import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsectoComponent } from './insecto.component';

describe('InsectoComponent', () => {
  let component: InsectoComponent;
  let fixture: ComponentFixture<InsectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
