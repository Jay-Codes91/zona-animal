import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AveComponent } from './ave.component';

describe('AveComponent', () => {
  let component: AveComponent;
  let fixture: ComponentFixture<AveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
