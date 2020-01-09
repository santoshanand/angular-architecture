import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { UiBaseModule } from 'src/app/shared/modules/ui-base/ui-base.module';

const routes: Routes = [
  { path: '', component: SignInComponent }
];

@NgModule({
  imports: [
    UiBaseModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignInComponent]
})
export class SignInModule { }
