import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { EAccountAuthority, EAccountAuthorityLabel } from 'projects/lib/src/lib/enum/account-authority.enum';
import { IOption } from '../model/option.model';

export interface AppState {
  authorityOptions: IOption<EAccountAuthority, EAccountAuthorityLabel>[];
  loading: boolean;
}

export function createInitialState(): AppState {
  return {
    authorityOptions: [
      { value: EAccountAuthority.MEMBER, label: EAccountAuthorityLabel.member },
      { value: EAccountAuthority.ADMIN, label: EAccountAuthorityLabel.admin }
    ],
    loading: false
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'app' })
export class AppStore extends Store<AppState> {
  constructor() {
    super(createInitialState());
  }
}
