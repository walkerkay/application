import { NgModule } from '@angular/core';
import { AppSharedModule } from '../app-shared.module';
import { ProjectTocComponent, ProjectComponent, ProjectService } from '.';
import { ProjectResolver } from './services/project-resolver';

@NgModule({
    imports: [
        AppSharedModule
    ],
    declarations: [
        ProjectComponent,
        ProjectTocComponent
    ],
    entryComponents: [
    ],
    exports: [
        ProjectComponent,
        ProjectTocComponent
    ],
    providers: [
        ProjectService,
        ProjectResolver
    ]
})
export class ProjectModule {
    constructor() {
    }
}
