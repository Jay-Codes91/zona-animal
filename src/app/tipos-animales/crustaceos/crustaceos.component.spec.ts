import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrustaceosComponent } from './crustaceos.component';

describe('CrustaceosComponent', () => {
  let component: CrustaceosComponent;
  let fixture: ComponentFixture<CrustaceosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrustaceosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrustaceosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
