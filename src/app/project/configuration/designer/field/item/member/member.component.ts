import { Component, OnInit, Input } from '@angular/core';
import { TaskFieldInfo } from '../../../../../entity/task-field-info';

@Component({
    selector: 'app-project-task-field-member',
    templateUrl: './member.component.html'
})
export class TaskFieldMemberComponent implements OnInit {

    @Input() field: TaskFieldInfo;

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
