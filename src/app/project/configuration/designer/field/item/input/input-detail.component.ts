import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form-field-input-detail',
    templateUrl: './input-detail.component.html'
})
export class FormFieldInputDetailComponent implements OnInit, OnChanges {

    @Input() field: any;

    @Input() form: FormGroup;

    get isValid() { return this.form.controls[this.field.key].valid; }

    constructor(
    ) {
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }

    ngOnInit() {

    }
}
