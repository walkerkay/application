import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { COMPONENTS, ENTRY_COMPONENTS, PIPES, PROVIDERS } from './components';
import { AppSharedModule } from './app-shared.module';
import { MessageModule } from './message/message.module';
import { ProjectModule } from './project/project.module';
import { appServices } from './services';

@NgModule({
  imports: [
    AppSharedModule,
    MessageModule,
    ProjectModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    AppNavComponent,
    ...COMPONENTS
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ],
  exports: [
    AppSharedModule,
    MessageModule,
    ProjectModule
  ],
  providers: [
    ...appServices,
    ...PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
