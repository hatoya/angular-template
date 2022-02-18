import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@ngneat/reactive-forms';
import { InputRangeService } from '../../../../component/molecule/input-range/state/input-range.service';
import { SampleService } from './sample.service';
import { SampleStore } from './sample.store';

jest.mock('../../../../component/molecule/input-range/state/input-range.service');

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

  it('form invalid', () => {
    const formGroup = sampleService.createFormGroup();
    expect(formGroup.valid).toBeTruthy();
  });
});
