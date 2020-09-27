import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EAccountAuthority, EAccountAuthorityLabel } from 'src/app/enum/account-authority.enum';
import { EDateFormat } from 'src/app/enum/date-format.enum';
import { AppQuery } from 'src/app/state/app.query';
import { AccountIndexQuery } from './state/account-index.query';
import { AccountIndexService } from './state/account-index.service';

@Component({
  selector: 'app-account-index',
  templateUrl: './account-index.component.html',
  styleUrls: ['./account-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountIndexComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  accountSubscription: Subscription;
  dateFormat = EDateFormat.DAYTIME;

  constructor(
    private formBuilder: FormBuilder,
    public appQuery: AppQuery,
    private service: AccountIndexService,
    public query: AccountIndexQuery
  ) {
    this.formGroup = this.formBuilder.group({ authority: '' });
  }

  ngOnInit(): void {
    this.accountSubscription = this.service.getAccounts().subscribe(accounts => {
      this.service.updateAccounts(accounts);
      this.service.updateLoading(false);
    });
  }

  ngOnDestroy() {
    this.service.resetStore();
  }

  getAuthorityLabel(authority: EAccountAuthority) {
    return EAccountAuthorityLabel[authority] || '';
  }
}
