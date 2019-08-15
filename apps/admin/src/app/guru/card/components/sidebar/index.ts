import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  TemplateRef,
  Directive
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
  constructor() {}
  ngOnInit() {}
}
