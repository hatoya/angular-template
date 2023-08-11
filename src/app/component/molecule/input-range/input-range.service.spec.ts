import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Validators } from '@angular/forms';
import { InputRangeService } from './input-range.service';

describe('InputRangeService', () => {
  let inputRangeService: InputRangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputRangeService],
      imports: [HttpClientTestingModule]
    });

    inputRangeService = TestBed.inject(InputRangeService);
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
