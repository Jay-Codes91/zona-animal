import { TestBed } from '@angular/core/testing';

import { DatosAnimalesService } from './datos-animales.service';

describe('DatosAnimalesService', () => {
  let service: DatosAnimalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosAnimalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
