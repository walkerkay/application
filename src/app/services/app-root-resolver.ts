import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TeamDataService } from '../../shared/services/team-data.service';

@Injectable()
export class AppRootResolver implements Resolve<any> {
    constructor(
        private teamDataService: TeamDataService,
        private router: Router
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.teamDataService.teamResolve()
            .pipe(catchError((error) => {
                return of(null);
            }));
    }
}
