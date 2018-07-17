import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { POST_COMPONENTS, PostComponent } from '../components/index';
import { SharedModule } from 'apps/web-angular6/src/app/features/shared/shared.module';

export const routes: Routes = [
  {
    path: '',
    component: PostComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...POST_COMPONENTS],
  exports: [...POST_COMPONENTS]
})
export class PostModule {}
