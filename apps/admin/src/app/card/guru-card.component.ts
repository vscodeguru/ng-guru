import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  AfterViewInit,
  ContentChildren,
  ContentChild,
  AfterContentInit,
  TemplateRef
} from '@angular/core';
import { GuruSidebar } from './components/sidebar';
import { GuruFooter, GuruContent, GuruHeader } from './components/helper';
import { isNullOrUndefined } from 'util';
import { ConcatSource } from 'webpack-sources';

@Component({
  selector: 'guru-card',
  templateUrl: 'guru-card.component.html'
})
export class GuruCardComponent implements OnInit, AfterContentInit {
  sidebar: {
    left?: GuruSidebar;
    right?: GuruSidebar;
  } = {};
  @ContentChild(GuruHeader) header: GuruHeader;
  @ContentChild(GuruContent) content: GuruContent;
  @ContentChild(GuruFooter) footer: GuruFooter;

  @ContentChildren(GuruSidebar) lstSidebar: QueryList<GuruSidebar>;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.sidebar = {};
    this.lstSidebar.forEach(sidebarInstance => {
      if (sidebarInstance.position === 'left') {
        this.sidebar.left = sidebarInstance;
      } else if (sidebarInstance.position === 'right') {
        this.sidebar.right = sidebarInstance;
      }
    });
    console.log(this.sidebar);
  }
  isValidElement(el: any) {
    return !isNullOrUndefined(el);
  }
}
