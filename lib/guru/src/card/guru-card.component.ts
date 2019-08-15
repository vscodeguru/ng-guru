import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  AfterViewInit,
  ContentChildren,
  ContentChild
} from '@angular/core';
import { GuruSidebar } from './components/sidebar';
import { GuruFooter, GuruContent, GuruHeader } from './components/helper';

@Component({
  selector: 'guru-card',
  templateUrl: 'guru-card.component.html'
})
export class GuruCardComponent implements OnInit, AfterViewInit {
  @ContentChild(GuruHeader) header: GuruHeader;
  @ContentChild(GuruContent) content: GuruContent;
  @ContentChild(GuruFooter) footer: GuruFooter;

  @ContentChildren(GuruSidebar) lstSidebar: QueryList<GuruSidebar>;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.lstSidebar.forEach(sidebarInstance => {
      if (sidebarInstance.position === 'left') {
      } else if (sidebarInstance.position === 'right') {
      }
    });
  }
}
