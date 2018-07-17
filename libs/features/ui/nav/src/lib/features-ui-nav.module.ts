import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '@wcmApplication/features/ui/nav/src/lib/nav/nav.component';
@NgModule({
  imports: [CommonModule],
  declarations: [NavComponent],
  exports: [NavComponent]
})
export class FeaturesUiNavModule {}
