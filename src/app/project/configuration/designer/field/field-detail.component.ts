import {
  Component, OnInit, ViewContainerRef, ComponentFactoryResolver, Input,
  Output, EventEmitter, OnChanges, forwardRef, SimpleChanges
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { projectConstant } from '../../../project.constant';
import { FormFieldInputDetailComponent } from './item/input/input-detail.component';

export const taskFieldComponentsKeyMap = {
  [projectConstant.fieldType.text]: FormFieldInputDetailComponent
};

@Component({
  selector: 'app-form-field-detail',
  templateUrl: './field-detail.component.html',
  providers: [
  ]
})
export class FormFieldDetailComponent implements OnInit {


  @Input() field: any;

  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.field.key].valid; }

  // public field: FieldInfo;

  // @Output() changeField = new EventEmitter();

  @Output() changeField: EventEmitter<any> = new EventEmitter<any>();

  private componentRef: any;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }


  emitValueChange(value: any) {
    this.field = value;
    this.changeField.emit(value);
  }

  getFieldValue() {
    return this.field;
  }

  ngOnInit() {
    this.viewContainerRef.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(taskFieldComponentsKeyMap[this.field.type]);
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    (this.componentRef.instance as any).field = this.field;
    (this.componentRef.instance as any).form = this.form;
    (this.componentRef.instance as any).changeValue = this.emitValueChange.bind(this);
  }
}
