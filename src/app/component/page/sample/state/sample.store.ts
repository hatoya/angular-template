import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { EFormStatus } from '../../../../enum/form-status.enum';
import { IOption } from '../../../../model/option.model';

export interface SampleState {
  statuses: IOption<EFormStatus, EFormStatus>[];
  options: IOption[];
  loading: boolean;
  sending: boolean;
}

export function createInitialState(): SampleState {
  return {
    statuses: [
      { value: EFormStatus.EDITABLE, label: EFormStatus.EDITABLE },
      { value: EFormStatus.DISABLED, label: EFormStatus.DISABLED },
      { value: EFormStatus.READONLY, label: EFormStatus.READONLY }
    ],
    options: [
      { value: 'option1', label: 'Option1' },
      { value: 'option2', label: 'Option2' },
      { value: 'option3', label: 'Option3' },
      { value: 'option4', label: 'Option4' }
    ],
    loading: true,
    sending: false
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'sample' })
export class SampleStore extends Store<SampleState> {
  constructor() {
    super(createInitialState());
  }
}
