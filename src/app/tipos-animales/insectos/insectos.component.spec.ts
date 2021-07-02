import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsectosComponent } from './insectos.component';

describe('InsectosComponent', () => {
  let component: InsectosComponent;
  let fixture: ComponentFixture<InsectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
