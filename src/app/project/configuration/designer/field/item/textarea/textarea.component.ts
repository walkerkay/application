import { Component, OnInit, Input } from '@angular/core';
import { TaskFieldInfo } from '../../../../../entity/task-field-info';

@Component({
    selector: 'app-project-task-field-textarea',
    templateUrl: './textarea.component.html'
})
export class TaskFieldTextareaComponent implements OnInit {

    @Input() field: TaskFieldInfo;

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
