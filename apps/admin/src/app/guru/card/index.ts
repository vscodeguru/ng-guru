import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatSidenavModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { GuruHeader, GuruContent, GuruFooter } from './components/helper';
import { GuruSidebar, GuruSidebarDirective } from './components/sidebar';
import { GuruCardComponent } from './guru-card.component';
import { GuruDirectiveModule } from '../directive';
@NgModule({
  declarations: [
    GuruCardComponent,
    GuruHeader,
    GuruContent,
    GuruFooter,
    GuruSidebar,
    GuruSidebarDirective
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    GuruDirectiveModule
  ],
  exports: [GuruCardComponent, GuruHeader, GuruContent, GuruFooter, GuruSidebarDirective]
})
export class GuruCardModule {}
