import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MessageComponent, MessageChatComponent } from './message';
import { ProjectComponent } from './project';
import { ProjectResolver } from './project/project-resolver';

const routes: Routes = [
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
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
