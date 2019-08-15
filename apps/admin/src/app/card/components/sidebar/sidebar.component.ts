import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  TemplateRef,
  Directive
} from '@angular/core';

@Component({
  selector: 'guru-sidebar',
  template: `
    <ng-content select="guru-header"></ng-content>
    <ng-content select="guru-content"></ng-content>
    <ng-content select="guru-footer"></ng-content>
  `,
  host: {
    class: 'guru-sidebar'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GuruSidebar implements OnInit {
  @Input('position') position: 'left' | 'right' = 'left';
  constructor() {}
  ngOnInit() {}
}
