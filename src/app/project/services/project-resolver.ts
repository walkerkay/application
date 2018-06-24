import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProjectService } from './project.service';

@Injectable()
export class ProjectResolver implements Resolve<any> {
    constructor(
        private projectService: ProjectService,
        private router: Router
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.projectService.getProjects()
            .pipe(catchError((error) => {
                return of(null);
            }));
    }
}
