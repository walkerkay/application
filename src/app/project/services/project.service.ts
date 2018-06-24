
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { ProjectInfo } from '../entity/project-info';
import { tap } from 'rxjs/operators';
import { ResponseData } from '../../../shared/entity/response-data';

@Injectable()
export class ProjectService {

    public projects$ = new Observable<ProjectInfo[]>();

    constructor(private http: HttpClient) {

    }

    getProjects(): Observable<ProjectInfo[]> {
        return this.http.get<ProjectInfo>('/assets/api/project/projects.json').pipe(
            tap((response: ResponseData) => {
                this.projects$ = of(response.data.projects);
            })
        );
    }
}
