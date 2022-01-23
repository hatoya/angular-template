import { defaulted, Infer, nullable, partial, string, number } from 'superstruct';

export const SFirestore = partial({
  id: defaulted(string(), ''),
  teamspirit: defaulted(string(), ''),
  created_at: defaulted(nullable(number()), null),
  updated_at: defaulted(nullable(number()), null)
});

export type TFirestore = Infer<typeof SFirestore>;
