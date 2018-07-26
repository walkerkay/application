import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { TaskInfo } from '../../entity/task-info';

@Component({
    selector: 'app-project-task-detail',
    templateUrl: './task-detail.component.html'
})
export class ProjectTaskDetailComponent implements OnInit {


    @Input() task: TaskInfo;

    constructor() { }

    ngOnInit() {
    }

}
