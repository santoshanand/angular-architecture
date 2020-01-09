import { NgModule } from '@angular/core';
import { LandingModule } from './pages/landing/landing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { UiBaseModule } from './shared/modules/ui-base/ui-base.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    UiBaseModule,
    LandingModule
  ],
  bootstrap: [LandingComponent]
})
export class AppModule { }
