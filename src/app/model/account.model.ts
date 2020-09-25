import { EAccountAuthority } from '../enum/account-authority.enum';
import { createFirestore, IFirestore } from './firestore.model';

export interface IAccount extends IFirestore {
  authority: EAccountAuthority;
  name: string;
  email: string;
}

export function createAccount(item: Partial<IAccount>): IAccount {
  return {
    ...createFirestore(item),
    authority: item.authority || EAccountAuthority.MEMBER,
    name: item.name || '',
    email: item.email || ''
  };
}
