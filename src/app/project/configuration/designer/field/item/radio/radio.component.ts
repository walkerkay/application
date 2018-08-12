import { Component, OnInit, Input } from '@angular/core';
import { TaskFieldInfo } from '../../../../../entity/task-field-info';

@Component({
    selector: 'app-project-task-field-radio',
    templateUrl: './radio.component.html'
})
export class TaskFieldRadioComponent implements OnInit {

    @Input() field: TaskFieldInfo;

    radioValue: any;

    constructor(
    ) {
    }

    ngOnInit() {
    }
}
