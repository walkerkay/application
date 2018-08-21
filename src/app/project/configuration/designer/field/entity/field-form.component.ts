import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  constructor(private fieldControlService: FieldControlService) { }

  ngOnInit() {
    this.form = this.fieldControlService.toFormGroup(this.fields);
  }

  onSubmit() {
    this.form;
    debugger
  }
}
