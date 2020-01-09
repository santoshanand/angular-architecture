import { NgModule } from '@angular/core';
import { SideBarComponent } from './side-bar.component';
import { UiBaseModule } from '../ui-base/ui-base.module';

@NgModule({
  imports: [
    UiBaseModule
  ],
  exports: [
    SideBarComponent
  ],
  declarations: [SideBarComponent]
})
export class SideBarModule { }
