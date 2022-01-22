import { any, array, assign, defaulted, enums, Infer, nullable, partial, string } from 'superstruct';
import { EMailTemplate } from '../enum/mail-template.enum';
import { SFirestore } from './firestore.model';

export const SMail = assign(
  SFirestore,
  partial({
    toUids: defaulted(array(string()), []),
    ccUids: defaulted(array(string()), []),
    template: partial({
      name: defaulted(nullable(enums(Object.values(EMailTemplate))), null),
      data: defaulted(any(), {})
    })
  })
);

export type TMail = Infer<typeof SMail>;