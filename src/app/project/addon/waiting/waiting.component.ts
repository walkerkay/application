import { Component, OnInit, HostBinding } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { TaskInfo } from '../../entity/task-info';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-project-addon-waiting',
  templateUrl: './waiting.component.html'
})
export class ProjectAddonWaitingComponent implements OnInit {

  public tasks: TaskInfo[];

  constructor(
    private projectService: ProjectService,
    private taskService: TaskService
  ) {
  }

  ngOnInit() {

    this.projectService.getProjectTasks().subscribe();

    this.projectService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  addTask(name: string) {
    this.projectService.addProjectTask(name);
  }

  openTask(task) {
     this.taskService.openTaskDetail(task);
  }
}
