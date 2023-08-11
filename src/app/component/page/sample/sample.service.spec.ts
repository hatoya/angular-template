import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { InputRangeService } from 'src/app/component/molecule/input-range/state/input-range.service';
import { SampleService } from './sample.service';

jest.mock('src/app/component/molecule/input-range/state/input-range.service');

describe('SampleService', () => {
  let sampleService: SampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleService, InputRangeService],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    });

    sampleService = TestBed.inject(SampleService);
  });

  it('should be created', () => {
    expect(sampleService).toBeDefined();
  });

  describe('createFormGroup', () => {
    it('should be working', () => {
      // exercise
      const formGroup = sampleService.formGroup;
      // verify
      expect(formGroup.value.text).toBe('');
      expect(formGroup.valid).toBeFalsy();
    });
  });
});
