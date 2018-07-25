import { ProjectAddonWaitingComponent } from './waiting/waiting.component';
import { ProjectAddonIterationComponent } from './iteration/iteration.component';

export {
    ProjectAddonWaitingComponent,
    ProjectAddonIterationComponent
};

export const addonComponentsKeyMap = {
    'waiting': ProjectAddonWaitingComponent,
    'iteration': ProjectAddonIterationComponent
};
