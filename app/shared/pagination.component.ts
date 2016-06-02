// in progress

import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'pagination',
  template: `
    <nav *ngIf="items.length > pageSize">
      <ul class="pagination pagination-sm">
        <li class="clickable" [class.disabled]="currentPage === 1">
          <a (click)="previous()" aria-label="Previous">
            <span aria-hidden="true">&laquo; Previous</span>
          </a>
        </li>
        <li
          class="clickable"
          [class.active]="currentPage === page"
          *ngFor="let page of pages"
          (click)="changePage(page)">
          <a> {{ page }} </a>
        </li>
        <li class="clickable" [class.disabled]="currentPage === pages.length">
          <a (click)="next()" aria-label="Next">
            <span aria-hidden="true">&raquo; Next</span>
          </a>
        </li>
      </ul>
    </nav>
  `
})

export class PaginationComponent implements OnChanges{

  @Input() items = [];
  @Input('page-size') pageSize = 10;
  @Output('page-changed') pageChanged = new EventEmitter();
  pages: any[];
  currentPage;

  ngOnChanges(){
    this.currentPage = 1;
    let pagesCount = this.items.length / this.pageSize;
    this.pages = [];

    for (let i = 1; i <= pagesCount; i++){
      this.pages.push(i);
    }

  }

  changePage(page){
    this.currentPage = page;
    this.pageChanged.emit(page);
  }

  previous(){
    if (this.currentPage === 1) {
      return;
    }
    this.currentPage--;
    this.pageChanged.emit(this.currentPage);
  }

  next(){
    if (this.currentPage === this.pages.length) {
      return;
    }
    this.currentPage++;
    this.pageChanged.emit(this.currentPage);
  }

}
