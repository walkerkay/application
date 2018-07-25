import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MessageComponent, MessageChatComponent } from './message';
import { ProjectComponent, ProjectDetailComponent, ProjectAddonComponent } from './project';
import { ProjectResolver } from './project/services/project-resolver';
import { AppRootResolver } from './services/app-root-resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/project',
    pathMatch: 'full',
    resolve: {
      data: AppRootResolver
    }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'message',
    component: MessageComponent,
    children: [
      {
        path: 'chat',
        component: MessageChatComponent
      }
    ]
  },
  {
    path: 'project',
    component: ProjectComponent,
    resolve: {
      data: ProjectResolver
    },
    children: [
      {
        path: ':pid',
        component: ProjectDetailComponent,
        children: [
          {
              path: '',
              component: ProjectAddonComponent
          },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
