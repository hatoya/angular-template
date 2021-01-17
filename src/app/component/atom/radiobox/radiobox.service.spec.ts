import { TestBed } from '@angular/core/testing';

import { RadioboxService } from './radiobox.service';

describe('RadioboxService', () => {
  let service: RadioboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadioboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
