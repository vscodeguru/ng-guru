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
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { GuruSidebarDirective, GuruSidebar } from './components/sidebar';
import { isNullOrUndefined } from 'util';
import { GuruScrollableCard } from 'apps/admin/src/app/guru/directive/card-scroller-guru.directive';

@Component({
  selector: 'guru-card',
  templateUrl: './guru-card.component.html',
  styleUrls: ['./guru-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuruCardComponent implements OnInit, AfterContentInit {
  sidebar_template: {
    left?: TemplateRef<GuruSidebarDirective>;
    right?: TemplateRef<GuruSidebarDirective>;
  } = {};

  @ContentChildren(GuruSidebarDirective) private lstSidebarCC: QueryList<GuruSidebarDirective>;

  @ViewChild('GuruNavRight') private GuruNavRight: GuruSidebar;
  @ViewChild('GuruNavLeft') private GuruNavLeft: GuruSidebar;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.lstSidebarCC.forEach(sidebarInstance => {
      if (sidebarInstance.position === 'left') {
        this.sidebar_template.left = sidebarInstance.template;
      } else if (sidebarInstance.position === 'right') {
        this.sidebar_template.right = sidebarInstance.template;
      }
    });
  }
  isValidElement(el: any) {
    return !isNullOrUndefined(el);
  }
  private nav(position: 'left' | 'right', action: 'open' | 'close' | 'toggle') {
    if (position === 'left' && !isNullOrUndefined(this.GuruNavLeft)) {
      this.GuruNavLeft.do(action);
    } else if (position === 'right' && !isNullOrUndefined(this.GuruNavRight)) {
      this.GuruNavRight.do(action);
    }
  }
}
