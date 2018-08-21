import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FieldBase } from './field-base';
import { FieldControlService } from './field-control.service';

@Component({
  selector: 'app-field-form',
  templateUrl: './field-form.component.html',
  providers: [FieldControlService]
})
export class FieldFormComponent implements OnInit {

  @Input() fields: FieldBase<any>[] = [];

  form: FormGroup;

  constructor(
    private fieldControlService: FieldControlService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(3)]]
    });
    // this.form = this.fieldControlService.toFormGroup(this.fields);
  }

  onSubmit() {
    this.form;
    debugger
  }
}
