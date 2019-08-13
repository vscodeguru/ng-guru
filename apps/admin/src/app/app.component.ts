import { Component } from '@angular/core';

@Component({
  selector: 'adm-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <lib-ngGuru></lib-ngGuru>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'admin';
}
