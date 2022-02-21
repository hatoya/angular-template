import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@ngneat/reactive-forms';
import { InputRangeService } from 'src/app/component/molecule/input-range/state/input-range.service';
import { SampleService } from './sample.service';
import { SampleStore } from './sample.store';

jest.mock('src/app/component/molecule/input-range/state/input-range.service');

describe('SampleService', () => {
  let sampleService: SampleService;
  let sampleStore: SampleStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleService, SampleStore, InputRangeService, FormBuilder],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    });

    sampleService = TestBed.inject(SampleService);
    sampleStore = TestBed.inject(SampleStore);
  });

  it('should be created', () => {
    expect(sampleService).toBeDefined();
  });

  describe('createFormGroup', () => {
    it('should be working', () => {
      // exercise
      const formGroup = sampleService.createFormGroup();
      // verify
      expect(formGroup.value.text).toBe('');
      expect(formGroup.valid).toBeFalsy();
    });
  });
});
