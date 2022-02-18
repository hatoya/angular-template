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

  it('form valid', () => {
    const formGroup = sampleService.createFormGroup();
    formGroup.patchValue({
      text: 'aaaaaa',
      list: 'aaa',
      email: 'aaa@aaa.aaa',
      number: 'aaa',
      date: '2022-01-01',
      month: '2022-01',
      inputRange: { from: '2022-01-01', to: '2022-01-01' },
      textarea: 'aaa',
      select: 'aaa',
      checkbox: ['aaa'],
      radiobox: 'aaa',
      range: '50',
      files: [{}]
    });
    expect(formGroup.valid).toBeTruthy();
  });

  it('form invalid', () => {
    const formGroup = sampleService.createFormGroup();
    expect(formGroup.valid).toBeFalsy();
  });
});
