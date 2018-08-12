import { Component, OnInit, Input } from '@angular/core';
import { TaskFieldInfo } from '../../../../../entity/task-field-info';

@Component({
    selector: 'app-project-task-field-date-range',
    templateUrl: './date-range.component.html'
})
export class TaskFieldDateRangeComponent implements OnInit {

    @Input() field: TaskFieldInfo;

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
