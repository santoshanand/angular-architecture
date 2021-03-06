import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { IconsProviderModule } from '../../providers/icons-provider.module';
import { BrowserModule } from '@angular/platform-browser';
registerLocaleData(en);
const modules = [
  CommonModule,
  // BrowserModule,
  IconsProviderModule,
  NgZorroAntdModule,
  FormsModule,
  HttpClientModule,
  // BrowserAnimationsModule,
  ReactiveFormsModule,
]

@NgModule({
  imports: [
    modules
  ],
  exports: [
    modules,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class UiBaseModule { }
