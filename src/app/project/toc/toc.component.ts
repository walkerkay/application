import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-toc',
  templateUrl: './toc.component.html'
})
export class ProjectTocComponent implements OnInit {

  constructor(
    public projectService: ProjectService
  ) {
  }

  ngOnInit() {
  }

}
