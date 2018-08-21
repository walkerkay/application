import { Component, OnInit, HostBinding } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { TaskInfo } from '../../entity/task-info';
import { TaskService } from '../../services/task.service';
import { TaskDesignerService } from './designer.services';
import { SortablejsOptions } from 'angular-sortablejs/dist';
import { FieldBase } from './field/entity/field-base';
import { FieldTextInput } from './field/entity/field-textinput';

@Component({
  selector: 'app-project-task-designer',
  templateUrl: './designer.component.html'
})
export class ProjectTaskDesignerComponent implements OnInit {

  public fields: any[] = [];

  public properties: any[] = [];

  public selectedValue: any;

  public radioValue: any;

  public date: any;

  public fieldSortOptions: SortablejsOptions = {
    group: 'designer'
  };

  public propertySortOptions: SortablejsOptions = {
    group: 'designer'
  };


  public fieldItems: any;

  constructor(
    private taskDesignerService: TaskDesignerService
  ) {
  }

  cloneFieldItem = (item) => {
    return item;
  }

  ngOnInit() {
    this.taskDesignerService.getAllFields().subscribe();
    this.taskDesignerService.fields$.subscribe((fields) => {
      this.fields = fields;
    });



    const fieldItems: FieldBase<any>[] = [
      new FieldTextInput({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        type: 1,
        required: true,
        orderNo: 1,
        className: 'anticon anticon-bars',
        helpText: '这个是帮助信息',
        placeHolder: '请输入姓名'
      })
    ];

    this.fieldItems = fieldItems.sort((a, b) => a.orderNo - b.orderNo);
  }
}
