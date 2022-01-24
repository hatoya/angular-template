import { Component, Input, OnInit } from '@angular/core';
import { IOption } from 'src/app/model/option.model';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss']
})
export class DatalistComponent implements OnInit {
  @Input() uuid = '';
  @Input() options: IOption[] = [];

  constructor() {}

  ngOnInit(): void {}
}
