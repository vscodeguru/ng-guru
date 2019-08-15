import {
  Component,
  OnInit,
  QueryList,
  AfterViewInit,
  ContentChildren,
  AfterContentInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef,
  EventEmitter,
  Output
} from '@angular/core';
import { MatSidenav } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import * as _ from 'lodash';
import { isNullOrUndefined } from 'util';
import { GuruSidebarDirective } from 'lib/guru/src/card/components/sidebar';

@Component({
  selector: 'guru-card',
  templateUrl: './guru-card.component.html',
  styleUrls: ['./guru-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuruCardComponent implements OnInit, AfterContentInit, AfterViewInit {
  sidebar: {
    left?: GuruSidebarDirective;
    right?: GuruSidebarDirective;
  } = {};

  @ContentChildren(GuruSidebarDirective) private lstSidebarCC: QueryList<GuruSidebarDirective>;

  @ViewChild('MatNavLeft') private MatNavLeft: MatSidenav;
  @ViewChild('MatNavRight') private MatNavRight: MatSidenav;

  @Output() sidebar_left_event: EventEmitter<
    'open_start' | 'close_start' | 'open_end' | 'close_end'
  > = new EventEmitter();
  @Output() sidebar_right_event: EventEmitter<
    'open_start' | 'close_start' | 'open_end' | 'close_end'
  > = new EventEmitter();
  constructor(
    private _cd: ChangeDetectorRef,
    private _platform: Platform,
    private _media: MediaMatcher
  ) {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.lstSidebarCC.forEach(sidebarInstance => {
      if (sidebarInstance.position === 'left') {
        this.sidebar.left = sidebarInstance;
      } else if (sidebarInstance.position === 'right') {
        this.sidebar.right = sidebarInstance;
      }
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.sidebarconfig();
    });
  }

  private isMobile = false;
  private _mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  private _sidebar_responsive_check = _.debounce(this.sidebar_responsive_check, 150);
  sidebarconfig() {
    this.MatNavLeft.mode = this.sidebar.left.mode;
    this.MatNavLeft.autoFocus = this.sidebar.left.autoFocus;
    this.MatNavLeft.disableClose = this.sidebar.left.disableClose;
    this.MatNavLeft.opened = this.sidebar.left.opened;

    this.MatNavRight.mode = this.sidebar.right.mode;
    this.MatNavRight.autoFocus = this.sidebar.right.autoFocus;
    this.MatNavRight.disableClose = this.sidebar.right.disableClose;
    this.MatNavRight.opened = this.sidebar.right.opened;

    this.isMobile = this._platform.ANDROID || this._platform.IOS;
    this._mobileQuery = this._media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this._cd.detectChanges();
    this._mobileQuery.addListener(this._mobileQueryListener);

    this._mobileQuery.onchange = () => {
      this._sidebar_responsive_check();
    };

    this._sidebar_responsive_check();
    this.sidebar_event_bind();
  }

  private sidebar_responsive_check() {
    if (this._mobileQuery.matches || this.isMobile) {
      if (this.sidebar.left.responsive) {
        this.MatNavLeft.mode = 'over';
        this.MatNavLeft.opened = false;
      }
      if (this.sidebar.right.responsive) {
        this.MatNavRight.mode = 'over';
        this.MatNavRight.opened = false;
      }
    } else if (!this._mobileQuery.matches) {
      if (this.sidebar.left.responsive) {
        this.MatNavLeft.mode = this.sidebar.left.mode;
        this.MatNavLeft.opened = this.sidebar.left.opened;
      }
      if (this.sidebar.right.responsive) {
        this.MatNavRight.mode = this.sidebar.right.mode;
        this.MatNavRight.opened = this.sidebar.right.opened;
      }
    }
  }
  private sidebar_event_bind() {
    if (!isNullOrUndefined(this.MatNavLeft)) {
      this.MatNavLeft.openedChange.subscribe(data => {
        this.sidebar_left_event.next(data ? 'open_end' : 'close_end');
      });
      this.MatNavLeft.openedStart.subscribe(data => {
        this.sidebar_left_event.next('open_start');
      });
      this.MatNavLeft.closedStart.subscribe(data => {
        this.sidebar_left_event.next('close_start');
      });
    }
    if (!isNullOrUndefined(this.MatNavRight)) {
      this.MatNavRight.openedChange.subscribe(data => {
        this.sidebar_right_event.next(data ? 'open_end' : 'close_end');
      });
      this.MatNavRight.openedStart.subscribe(data => {
        this.sidebar_right_event.next('open_start');
      });
      this.MatNavRight.closedStart.subscribe(data => {
        this.sidebar_right_event.next('close_start');
      });
    }
  }
  sidebar_left(action: 'open' | 'close' | 'toggle') {
    this._sidebar_action(this.MatNavLeft, action);
  }
  sidebar_right(action: 'open' | 'close' | 'toggle') {
    this._sidebar_action(this.MatNavRight, action);
  }

  private _sidebar_action(nav: MatSidenav, action: 'open' | 'close' | 'toggle') {
    // OPEN SIDEBAR
    if (action === 'open') nav.open();
    // CLOSE SIDEBAR
    if (action === 'close') nav.close();
    // TOGGLE SIDEBAR
    if (action === 'toggle') nav.toggle();
  }
}
