import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'card-data',
  templateUrl: './card-data.component.html',
  styles: []
})
export class CardDataComponent implements AfterViewInit {
  title = 'ngGuru';
  public lst: any[] = [];
  public lst1: any[] = [];
  items = [];
  constructor(private cd: ChangeDetectorRef) {
    for (let index = 1; index < 1000; index++) {
      this.items.push(index);
    }
    for (let index = 1; index <= 8; index++) {
      const element = index;
      this.lst.push(element);
    }
    for (let index = 1; index <= 100; index++) {
      const element = index;
      this.lst1.push(element);
    }
  }

  ngAfterViewInit(): void {
    // this.navRight.mode = 'side';
  }
}
