import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-regular-svg-icons';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {
  @Input() currentPage = 1;
  @Input() maxPage = 1;

  @Output() switchPage = new EventEmitter();

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor() {}

  ngOnInit(): void {}

  get pages() {
    if (this.currentPage < 5) {
      return [2, 3, 4, 5].filter(page => page < this.maxPage);
    } else if (this.currentPage > this.maxPage - 3) {
      return new Array(4)
        .fill(null)
        .map((_, index) => this.maxPage + index - 4)
        .filter(page => page < this.maxPage);
    } else {
      return [this.currentPage - 1, this.currentPage, this.currentPage + 1];
    }
  }

  switch(page: number) {
    this.currentPage = page;
    this.switchPage.emit(this.currentPage);
  }

  prev() {
    this.currentPage--;
    this.switchPage.emit(this.currentPage);
  }

  next() {
    this.currentPage++;
    this.switchPage.emit(this.currentPage);
  }
}
