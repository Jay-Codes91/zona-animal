import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfibiosComponent } from './anfibios.component';

describe('AnfibiosComponent', () => {
  let component: AnfibiosComponent;
  let fixture: ComponentFixture<AnfibiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnfibiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfibiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
