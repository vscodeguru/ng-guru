import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Directive,
  Input,
  TemplateRef
} from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'guru-header',
  template: `
    <mat-toolbar class="guru-header-toolbar">
      <ng-content></ng-content>
    </mat-toolbar>
  `,
  host: {
    class: 'guru-header'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GuruHeader {}

@Component({
  selector: 'guru-content',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    class: 'guru-content'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GuruContent {}

@Component({
  selector: 'guru-footer',
  template: `
    <mat-toolbar class="guru-footer-toolbar">
      <ng-content></ng-content>
    </mat-toolbar>
  `,
  host: {
    class: 'guru-footer'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GuruFooter {}

@Directive({ selector: '[guru-sidebar]' })
export class GuruSidebarDirective {
  @Input('guru-sidebar') position: 'left' | 'right';
  @Input() mode?: 'push' | 'over' | 'side';
  @Input() autoFocus?: boolean;
  @Input() disableClose?: boolean;
  @Input() opened?: boolean;
  @Input() responsive?: boolean;

  constructor(public template: TemplateRef<any>) {
    this.mode = isNullOrUndefined(this.mode) ? 'side' : this.mode;
    this.opened = isNullOrUndefined(this.opened) ? true : this.opened;
    this.responsive = isNullOrUndefined(this.responsive) ? true : this.responsive;
    this.autoFocus = isNullOrUndefined(this.autoFocus) ? true : this.autoFocus;
    this.disableClose = isNullOrUndefined(this.disableClose) ? false : this.disableClose;
  }
}
