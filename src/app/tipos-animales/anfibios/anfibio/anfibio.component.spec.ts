import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfibioComponent } from './anfibio.component';

describe('AnfibioComponent', () => {
  let component: AnfibioComponent;
  let fixture: ComponentFixture<AnfibioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnfibioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfibioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
