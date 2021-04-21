import { TestBed } from '@angular/core/testing';

import { ButtonWrapperService } from './button-wrapper.service';

describe('ButtonWrapperService', () => {
  let service: ButtonWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
