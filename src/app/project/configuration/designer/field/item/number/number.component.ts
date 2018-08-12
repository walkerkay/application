import { Component, OnInit, Input } from '@angular/core';
import { TaskFieldInfo } from '../../../../../entity/task-field-info';

@Component({
    selector: 'app-project-task-field-number',
    templateUrl: './number.component.html'
})
export class TaskFieldNumberComponent implements OnInit {

    @Input() field: TaskFieldInfo;

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
