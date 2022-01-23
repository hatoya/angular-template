import { Timestamp } from '@angular/fire/firestore';
import { defaulted, Infer, nullable, partial, string, instance } from 'superstruct';

export const SFirestore = partial({
  id: defaulted(string(), ''),
  teamspirit: defaulted(string(), ''),
  created_at: defaulted(nullable(instance(Timestamp)), null),
  updated_at: defaulted(nullable(instance(Timestamp)), null)
});

export type TFirestore = Infer<typeof SFirestore>;
