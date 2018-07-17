import { NgModule } from '@angular/core';

// libs
import { environment } from '@wcmApplication/core';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FeaturesUiNavModule } from '@wcmApplication/features/ui/nav/src/lib/features-ui-nav.module';
import { PostModule } from './features/shared/components/post.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CoreModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    FeaturesUiNavModule,
    PostModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
