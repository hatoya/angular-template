import { Injectable } from '@angular/core';
import { EMessageType } from 'src/app/enum/message-type.enum';
import { EMessage } from 'src/app/enum/message.enum';
import { SMessage, TMessage } from 'src/app/model/message.model';
import { v4 as uuidv4 } from 'uuid';
import { SnackbarQuery } from './snackbar.query';
import { SnackbarStore } from './snackbar.store';

@Injectable({ providedIn: 'root' })
export class SnackbarService {
  constructor(private store: SnackbarStore, private query: SnackbarQuery) {}

  pushMessage(item: Partial<TMessage>) {
    const { messages } = this.query.getValue();
    const message = SMessage.mask({ ...item, id: uuidv4() });
    this.store.update({ messages: [...messages, message] });
    if (message.lifespan) {
      setTimeout(() => {
        this.deleteMessage(message.id);
      }, message.lifespan);
    }
  }

  deleteMessage(id: string) {
    const { messages } = this.query.getValue();
    const index = messages.findIndex(message => message.id === id);
    if (index === -1) {
      return;
    }
    messages.splice(index, 1);
    this.store.update({ messages });
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
