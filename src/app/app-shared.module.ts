import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
  ],
  entryComponents: [
  ],
  exports: [
    AppRoutingModule,
    SharedModule
  ],
  providers: [
  ]
})
export class AppSharedModule { }
