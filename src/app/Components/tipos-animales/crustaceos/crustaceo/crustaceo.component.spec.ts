import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrustaceoComponent } from './crustaceo.component';

describe('CrustaceoComponent', () => {
  let component: CrustaceoComponent;
  let fixture: ComponentFixture<CrustaceoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrustaceoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrustaceoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
