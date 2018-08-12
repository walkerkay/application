import { Component, OnInit, Input } from '@angular/core';
import { TaskFieldInfo } from '../../../../../entity/task-field-info';

@Component({
    selector: 'app-project-task-field-date',
    templateUrl: './date.component.html'
})
export class TaskFieldDateComponent implements OnInit {

    @Input() field: TaskFieldInfo;

    date: any;

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
