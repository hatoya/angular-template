import { Injectable, signal } from '@angular/core';
import { EMessageType } from 'src/app/enum/message-type.enum';
import { EMessage } from 'src/app/enum/message.enum';
import { SMessage, TMessage } from 'src/app/model/message.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class SnackbarService {
  messages = signal<TMessage[]>([]);

  constructor() {}

  pushMessage(item: Partial<TMessage>) {
    const message = SMessage.mask({ ...item, id: uuidv4() });
    this.messages.update(messages => [...messages, message]);
    if (message.lifespan) {
      setTimeout(() => {
        this.deleteMessage(message.id);
      }, message.lifespan);
    }
  }

  deleteMessage(id: string) {
    const index = this.messages().findIndex(message => message.id === id);
    if (index === -1) {
      return;
    }
    this.messages.update(messages => messages.splice(index, 1));
  }

  pushSuccessMessage() {
    this.pushMessage({ type: EMessageType.SUCCESS, message: EMessage.SUCCESS });
  }

  pushValidationMessage() {
    this.pushMessage({ type: EMessageType.ERROR, message: EMessage.VALIDATION_ERROR });
  }

  pushBrokenMessage() {
    this.pushMessage({ type: EMessageType.ERROR, message: EMessage.BROKEN });
  }
}
