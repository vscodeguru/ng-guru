import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input,
  TemplateRef,
  Directive,
  ChangeDetectorRef,
  EventEmitter,
  AfterViewInit
} from '@angular/core';
import { MatSidenav } from '@angular/material';
import { isNullOrUndefined } from 'util';

@Directive({ selector: '[guru-sidebar]' })
export class GuruSidebarDirective implements AfterViewInit {
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
  ngAfterViewInit() {}
}
