import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mergeMap } from 'rxjs/operators';
import { ModalService } from '../state/modal.service';
import { SigninQuery } from './state/signin.query';
import { SigninService } from './state/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: SigninService,
    private modalService: ModalService,
    public query: SigninQuery
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^[a-z\d]/i), Validators.minLength(6), Validators.maxLength(100)]]
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.service.resetStore();
  }

  submit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    this.service.updateSending(true);
    this.service
      .createAccount(this.formGroup.value)
      .pipe(mergeMap(id => this.service.setAccount(id, this.formGroup.value)))
      .subscribe({
        next: () => this.modalService.close(),
        error: () => this.service.updateSending(false)
      });
  }
}
