import { Component } from '@angular/core';

import { BaseComponent } from '@wcmApplication/core';

@Component({
  selector: 'foo-post',
  templateUrl: 'post.component.html'
})
export class PostComponent extends BaseComponent {
  constructor() {
    super();
  }

  onSave(postdata: any) {
    console.log(postdata.value);
  }
}
