import { defaulted, enums, Infer, nullable, number, partial, string } from 'superstruct';
import { EMessageType } from '../enum/message-type.enum';

export const SMessage = partial({
  id: defaulted(string(), ''),
  type: defaulted(enums(Object.values(EMessageType)), EMessageType.INFORMATION),
  message: defaulted(string(), ''),
  lifespan: defaulted(nullable(number()), 5000)
});

export type TMessage = Infer<typeof SMessage>;
