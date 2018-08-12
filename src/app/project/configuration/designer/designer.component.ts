import { Component, OnInit, HostBinding } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { TaskInfo } from '../../entity/task-info';
import { TaskService } from '../../services/task.service';
import { TaskDesignerService } from './designer.services';
import { SortablejsOptions } from 'angular-sortablejs/dist';

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
  }
}
