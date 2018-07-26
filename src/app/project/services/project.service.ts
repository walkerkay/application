
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of, BehaviorSubject } from 'rxjs';
import { ProjectInfo } from '../entity/project-info';
import { tap, map } from 'rxjs/operators';
import { ResponseData } from '../../../shared/entity/response-data';
import { ProjectAddonInfo } from '../entity/project-addon-info';
import { TaskInfo } from '../entity/task-info';

@Injectable()
export class ProjectService {

    public projects$ = new Observable<ProjectInfo[]>();

    public addons$ = new Observable<ProjectAddonInfo[]>();

    public selectedAddon = new Subject<ProjectAddonInfo>();

    public tasks$ = new BehaviorSubject<TaskInfo[]>([]);

    constructor(private http: HttpClient) {

    }

    getProjects(): Observable<ProjectInfo[]> {
        return this.http.get<ProjectInfo>('/assets/api/project/projects.json').pipe(
            tap((response: ResponseData) => {
                this.projects$ = of(response.data.projects);
            })
        );
    }


    getProjectAddons(): Observable<ProjectAddonInfo[]> {
        return this.http.get<ProjectAddonInfo>('/assets/api/project/addons.json').pipe(
            map((response: ResponseData) => {
                const addons = response.data.addons;
                this.selectProjectAddon(addons[0]);
                this.addons$ = of(response.data.addons);
                return addons;
            })
        );
    }

    getProjectTasks(): Observable<TaskInfo[]> {
        return this.http.get<TaskInfo>('/assets/api/project/tasks.json').pipe(
            map((response: ResponseData) => {
                const tasks = response.data.tasks;
                this.tasks$.next(tasks);
                return tasks;
            })
        );
    }

    addProjectTask(name: string) {
        this.tasks$.next([
            ...this.tasks$.getValue(),
            { name: name }
        ]);
    }


    selectProjectAddon(addon: ProjectAddonInfo) {
        this.selectedAddon.next(addon);
    }
}
