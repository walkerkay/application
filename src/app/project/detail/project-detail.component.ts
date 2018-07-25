import { Component, OnInit, HostBinding } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { ProjectAddonInfo } from '../entity/project-addon-info';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {

  public addons: ProjectAddonInfo[] = [];

  constructor(
    public projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projectService.getProjectAddons().subscribe((addons: ProjectAddonInfo[]) => {
      this.addons = addons;
    });
  }

  selectAddon(addon: ProjectAddonInfo) {
    this.projectService.selectProjectAddon(addon);
  }
}
