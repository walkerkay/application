import { Component, OnInit, Input } from '@angular/core';
import { TaskFieldInfo } from '../../../../../entity/task-field-info';

@Component({
    selector: 'app-project-task-field-input',
    templateUrl: './input.component.html'
})
export class TaskFieldInputComponent implements OnInit {

    @Input() field: TaskFieldInfo;

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
