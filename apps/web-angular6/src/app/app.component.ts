import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@wcmApplication/web';

@Component({
  selector: 'foo-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
