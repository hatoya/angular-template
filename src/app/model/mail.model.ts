import { any, array, assign, defaulted, Infer, partial, string } from 'superstruct';
import { SFirestore } from './firestore.model';

export const SMail = assign(
  SFirestore,
  partial({
    toUids: defaulted(array(string()), []),
    ccUids: defaulted(array(string()), []),
    template: partial({
      name: defaulted(string(), ''),
      data: defaulted(any(), {})
    })
  })
);

export type TMail = Infer<typeof SMail>;
