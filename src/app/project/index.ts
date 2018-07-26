import { ProjectDetailComponent } from './detail/project-detail.component';
import { ProjectComponent } from './project.component';
import { ProjectTocComponent } from './toc/toc.component';
import { ProjectService } from './services/project.service';
import { ProjectAddonComponent } from './detail/project-addon.component';
import { ProjectAddonWaitingComponent, ProjectAddonIterationComponent } from './addon';
import { ProjectTaskDetailComponent } from './task/detail/task-detail.component';
import { TaskService } from './services/task.service';

export {
    ProjectComponent,
    ProjectTocComponent,
    ProjectDetailComponent,
    ProjectAddonComponent,
    ProjectTaskDetailComponent
};


export const COMPONENTS = [
    ProjectComponent,
    ProjectTocComponent,
    ProjectDetailComponent,
    ProjectAddonWaitingComponent,
    ProjectAddonIterationComponent,
    ProjectAddonComponent,
    ProjectTaskDetailComponent
];


export const ENTITY_COMPONENTS = [
    ProjectAddonWaitingComponent,
    ProjectAddonIterationComponent,
    ProjectTaskDetailComponent
];

export const PROVIDERS = [
    ProjectService,
    TaskService
];
