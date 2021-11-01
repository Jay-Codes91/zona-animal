import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamiferosComponent } from './mamiferos.component';

describe('MamiferosComponent', () => {
  let component: MamiferosComponent;
  let fixture: ComponentFixture<MamiferosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MamiferosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MamiferosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
