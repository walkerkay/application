import { ProjectDetailComponent } from './detail/project-detail.component';
import { ProjectComponent } from './project.component';
import { ProjectTocComponent } from './toc/toc.component';
import { ProjectService } from './services/project.service';
import { ProjectAddonComponent } from './detail/project-addon.component';
import { ProjectAddonWaitingComponent, ProjectAddonIterationComponent } from './addon';

export {
    ProjectComponent,
    ProjectTocComponent,
    ProjectDetailComponent,
    ProjectAddonComponent
};


export const COMPONENTS = [
    ProjectComponent,
    ProjectTocComponent,
    ProjectDetailComponent,
    ProjectAddonWaitingComponent,
    ProjectAddonIterationComponent,
    ProjectAddonComponent
];


export const ENTITY_COMPONENTS = [
    ProjectAddonWaitingComponent,
    ProjectAddonIterationComponent
];

export const PROVIDERS = [
    ProjectService
];
