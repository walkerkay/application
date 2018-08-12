import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';
import { TaskFieldInfo } from '../../../entity/task-field-info';
import { projectConstant } from '../../../project.constant';
import { TaskFieldInputComponent } from './item/input/input.component';
import { TaskFieldTextareaComponent } from './item/textarea/textarea.component';
import { TaskFieldNumberComponent } from './item/number/number.component';
import { TaskFieldDateComponent } from './item/date/date.component';
import { TaskFieldDateRangeComponent } from './item/date-range/date-range.component';
import { TaskFieldSelectComponent } from './item/select/select.component';
import { TaskFieldRadioComponent } from './item/radio/radio.component';
import { TaskFieldMemberComponent } from './item/member/member.component';
import { TaskFieldMembersComponent } from './item/members/members.component';


export const taskFieldComponentsKeyMap = {
  [projectConstant.fieldType.text]: TaskFieldInputComponent,
  [projectConstant.fieldType.textarea]: TaskFieldTextareaComponent,
  [projectConstant.fieldType.number]: TaskFieldNumberComponent,
  [projectConstant.fieldType.date]: TaskFieldDateComponent,
  [projectConstant.fieldType.dateRange]: TaskFieldDateRangeComponent,
  [projectConstant.fieldType.select]: TaskFieldSelectComponent,
  [projectConstant.fieldType.radio]: TaskFieldRadioComponent,
  [projectConstant.fieldType.member]: TaskFieldMemberComponent,
  [projectConstant.fieldType.members]: TaskFieldMembersComponent
};


@Component({
  selector: 'app-project-task-field',
  templateUrl: './field.component.html'
})
export class TaskFieldComponent implements OnInit {

  @Input() field: TaskFieldInfo;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit() {
    this.viewContainerRef.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(taskFieldComponentsKeyMap[this.field.type]);
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as any).field = this.field;
  }
}
