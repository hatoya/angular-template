import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Validators } from '@angular/forms';
import { InputRangeService } from './input-range.service';
import { InputRangeStore } from './input-range.store';

describe('InputRangeService', () => {
  let inputRangeService: InputRangeService;
  let inputRangeStore: InputRangeStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputRangeService, InputRangeStore],
      imports: [HttpClientTestingModule]
    });

    inputRangeService = TestBed.inject(InputRangeService);
    inputRangeStore = TestBed.inject(InputRangeStore);
  });

  it('should be created', () => {
    expect(inputRangeService).toBeDefined();
  });

  describe('createFormGroup', () => {
    it('should be working', () => {
      // exercise
      const formGroup = inputRangeService.createFormGroup();
      // verify
      expect(formGroup.valid).toBeTruthy();
      expect(formGroup.value.from).toBe('');
      expect(formGroup.value.to).toBe('');
      expect(formGroup.validator).toBe(null);
      expect(formGroup.controls.from.validator).toBe(null);
      expect(formGroup.controls.to.validator).toBe(null);
    });

    it('set validators', () => {
      const validators = [Validators.required];
      // exercise
      const formGroup = inputRangeService.createFormGroup(validators, validators, validators);
      // verify
      expect(formGroup.valid).toBeFalsy();
      expect(formGroup.validator).toBeDefined();
      expect(formGroup.controls.from.validator).toBeDefined();
      expect(formGroup.controls.to.validator).toBeDefined();
    });
  });
});
