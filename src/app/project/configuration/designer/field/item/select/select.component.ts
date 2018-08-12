import { Component, OnInit, Input } from '@angular/core';
import { TaskFieldInfo } from '../../../../../entity/task-field-info';

@Component({
    selector: 'app-project-task-field-select',
    templateUrl: './select.component.html'
})
export class TaskFieldSelectComponent implements OnInit {

    @Input() field: TaskFieldInfo;

    selectedValue: any;

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
