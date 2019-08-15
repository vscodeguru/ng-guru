import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatSidenavModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GuruCardComponent } from 'lib/guru/src/card/guru-card.component';
import { GuruHeader, GuruContent, GuruFooter } from 'lib/guru/src/card/components/helper';
import { GuruSidebarDirective } from 'lib/guru/src/card/components/sidebar';
import { GuruDirectiveModule } from 'lib/guru/src/directive';

@NgModule({
  declarations: [GuruCardComponent, GuruHeader, GuruContent, GuruFooter, GuruSidebarDirective],
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
