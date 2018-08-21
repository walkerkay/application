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
import { TASK_FIELD_COMPONENTS, TASK_FIELD_ENTITY_COMPONENTS } from './configuration/designer/field';
import { FieldControlService } from './configuration/designer/field/entity/field-control.service';


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
    ProjectTaskDesignerComponent,
    ...TASK_FIELD_COMPONENTS
];


export const ENTITY_COMPONENTS = [
    ProjectAddonWaitingComponent,
    ProjectAddonIterationComponent,
    ProjectTaskDetailComponent,
    ...TASK_FIELD_ENTITY_COMPONENTS
];

export const PROVIDERS = [
    ProjectService,
    TaskService,
    TaskDesignerService,
    FieldControlService
];
