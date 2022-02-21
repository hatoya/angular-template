import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EMessageType } from 'src/app/enum/message-type.enum';
import { EMessage } from 'src/app/enum/message.enum';
import { SnackbarQuery } from './snackbar.query';
import { SnackbarService } from './snackbar.service';
import { SnackbarStore } from './snackbar.store';

jest.useFakeTimers();

describe('SnackbarService', () => {
  let snackbarService: SnackbarService;
  let snackbarStore: SnackbarStore;
  let snackbarQuery: SnackbarQuery;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnackbarService, SnackbarStore],
      imports: [HttpClientTestingModule]
    });

    snackbarService = TestBed.inject(SnackbarService);
    snackbarStore = TestBed.inject(SnackbarStore);
    snackbarQuery = TestBed.inject(SnackbarQuery);
  });

  it('should be created', () => {
    expect(snackbarService).toBeDefined();
  });

  describe('pushMessage', () => {
    it('push message', () => {
      const message = { type: EMessageType.SUCCESS, message: 'aaa' };
      // exercise
      snackbarService.pushMessage(message);
      // verify
      expect(snackbarQuery.getValue().messages).toHaveLength(1);
      expect(snackbarQuery.getValue().messages[0]?.type).toBe(message.type);
      expect(snackbarQuery.getValue().messages[0]?.message).toBe(message.message);
      expect(snackbarQuery.getValue().messages[0]?.lifespan).toBe(5000);
      jest.runAllTimers();
      expect(snackbarQuery.getValue().messages).toHaveLength(0);
    });
  });

  describe('deleteMessage', () => {
    const message = { id: 'aaa', lifespan: 5000, type: EMessageType.SUCCESS, message: 'aaa' };

    beforeEach(() => {
      snackbarStore.update({ messages: [message] });
    });

    it('delete message', () => {
      // exercise
      snackbarService.deleteMessage(message.id);
      // verify
      expect(snackbarQuery.getValue().messages).toHaveLength(0);
    });

    it('return', () => {
      // exercise
      snackbarService.deleteMessage('bbb');
      // verify
      expect(true).toBeTruthy();
    });
  });

  describe('pushSuccessMessage', () => {
    it('push success message', () => {
      // exercise
      snackbarService.pushSuccessMessage();
      // verify
      expect(snackbarQuery.getValue().messages).toHaveLength(1);
      expect(snackbarQuery.getValue().messages[0].type).toBe(EMessageType.SUCCESS);
      expect(snackbarQuery.getValue().messages[0].message).toEqual(EMessage.SUCCESS);
    });
  });

  describe('pushValidationMessage', () => {
    it('push validation message', () => {
      // exercise
      snackbarService.pushValidationMessage();
      // verify
      expect(snackbarQuery.getValue().messages).toHaveLength(1);
      expect(snackbarQuery.getValue().messages[0].type).toBe(EMessageType.ERROR);
      expect(snackbarQuery.getValue().messages[0].message).toEqual(EMessage.VALIDATION_ERROR);
    });
  });

  describe('pushBrokenMessage', () => {
    it('push broken message', () => {
      // exercise
      snackbarService.pushBrokenMessage();
      // verify
      expect(snackbarQuery.getValue().messages).toHaveLength(1);
      expect(snackbarQuery.getValue().messages[0].type).toBe(EMessageType.ERROR);
      expect(snackbarQuery.getValue().messages[0].message).toEqual(EMessage.BROKEN);
    });
  });
});
