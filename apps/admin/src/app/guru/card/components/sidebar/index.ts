import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  TemplateRef,
  Directive,
  ChangeDetectorRef
} from '@angular/core';
import { MatSidenav } from '@angular/material';

@Directive({ selector: '[guru-sidebar]' })
export class GuruSidebarDirective {
  @Input('guru-sidebar') position: 'left' | 'right';
  constructor(public template: TemplateRef<any>) {}
}

@Component({
  selector: 'guru-sidebar',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    class: 'guru-sidebar'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GuruSidebar implements OnInit {
  @Input('nav') nav: MatSidenav;
  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit() {}

  do(action: 'open' | 'close' | 'toggle') {
    // OPEN SIDEBAR
    if (action === 'open') this.nav.open();
    // CLOSE SIDEBAR
    if (action === 'close') this.nav.close();
    // TOGGLE SIDEBAR
    if (action === 'toggle') this.nav.toggle();
  }
}
