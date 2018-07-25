import { Component, OnInit, HostBinding, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { addonComponentsKeyMap } from '../addon';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-addon',
  templateUrl: './project-addon.component.html'
})
export class ProjectAddonComponent implements OnInit {

  constructor(
    private projectService: ProjectService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.projectService.selectedAddon.subscribe((addon) => {
      this.viewContainerRef.clear();
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(addonComponentsKeyMap[addon.key]);
      this.viewContainerRef.createComponent(componentFactory);
    });
  }
}
