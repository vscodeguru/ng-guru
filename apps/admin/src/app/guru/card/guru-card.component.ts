import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  AfterViewInit,
  ContentChildren,
  ContentChild,
  AfterContentInit,
  TemplateRef,
  ElementRef,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { GuruSidebarDirective } from './components/sidebar';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'guru-card',
  templateUrl: './guru-card.component.html',
  styleUrls: ['./guru-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuruCardComponent implements OnInit, AfterContentInit {
  sidebar: {
    left?: TemplateRef<GuruSidebarDirective>;
    right?: TemplateRef<GuruSidebarDirective>;
  } = {};
  @ContentChildren(GuruSidebarDirective) lstSidebarCC: QueryList<GuruSidebarDirective>;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.lstSidebarCC.forEach(sidebarInstance => {
      if (sidebarInstance.position === 'left') {
        this.sidebar.left = sidebarInstance.template;
      } else if (sidebarInstance.position === 'right') {
        this.sidebar.right = sidebarInstance.template;
      }
    });
  }
  isValidElement(el: any) {
    return !isNullOrUndefined(el);
  }
}
