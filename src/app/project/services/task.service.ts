import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskInfo } from '../entity/task-info';
import { ProjectTaskDetailComponent } from '../task/detail/task-detail.component';
import { BsModalService } from 'ngx-bootstrap';

@Injectable()
export class TaskService {

    constructor(
        private http: HttpClient,
        private modalService: BsModalService
    ) {

    }

    openTaskDetail(task: TaskInfo) {
        const modal = this.modalService.show(
            ProjectTaskDetailComponent,
            {
                initialState: {
                    task: task
                }
            }
        );
    }
}
