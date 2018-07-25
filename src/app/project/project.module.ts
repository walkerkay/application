import { NgModule } from '@angular/core';
import { AppSharedModule } from '../app-shared.module';
import { COMPONENTS, ENTITY_COMPONENTS, PROVIDERS } from '.';
import { ProjectResolver } from './services/project-resolver';

@NgModule({
    imports: [
        AppSharedModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    entryComponents: [
        ...ENTITY_COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ],
    providers: [
        ...PROVIDERS,
        ProjectResolver
    ]
})
export class ProjectModule {
    constructor() {
    }
}
