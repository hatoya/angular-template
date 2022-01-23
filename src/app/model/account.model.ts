import { assign, defaulted, enums, Infer, nullable, partial, string } from 'superstruct';
import { EAccountRole } from '../enum/account-role.enum';
import { ETheme } from '../enum/theme.enum';
import { SFirestore } from './firestore.model';

export const SAccount = assign(
  SFirestore,
  partial({
    name: defaulted(string(), ''),
    email: defaulted(string(), ''),
    phone: defaulted(string(), ''),
    theme: defaulted(nullable(enums(Object.values(ETheme))), null),
    role: defaulted(enums(Object.values(EAccountRole)), EAccountRole.MEMBER)
  })
);

export type TAccount = Infer<typeof SAccount>;
