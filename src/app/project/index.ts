import { ProjectDetailComponent } from './detail/project-detail.component';
import { ProjectComponent } from './project.component';
import { ProjectTocComponent } from './toc/toc.component';
import { ProjectService } from './services/project.service';
import { ProjectAddonComponent } from './detail/project-addon.component';
import { ProjectAddonWaitingComponent, ProjectAddonIterationComponent } from './addon';
import { ProjectTaskDetailComponent } from './task/detail/task-detail.component';
import { TaskService } from './services/task.service';
import { ProjectTaskDesignerComponent } from './configuration/designer/designer.component';
import { TaskDesignerService } from './configuration/designer/designer.services';

export {
    ProjectComponent,
    ProjectTocComponent,
    ProjectDetailComponent,
    ProjectAddonComponent,
    ProjectTaskDetailComponent,
    ProjectTaskDesignerComponent
};


export const COMPONENTS = [
    ProjectComponent,
    ProjectTocComponent,
    ProjectDetailComponent,
    ProjectAddonWaitingComponent,
    ProjectAddonIterationComponent,
    ProjectAddonComponent,
    ProjectTaskDetailComponent,
    ProjectTaskDesignerComponent
];


export const ENTITY_COMPONENTS = [
    ProjectAddonWaitingComponent,
    ProjectAddonIterationComponent,
    ProjectTaskDetailComponent
];

export const PROVIDERS = [
    ProjectService,
    TaskService,
    TaskDesignerService
];
