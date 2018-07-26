import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {

  constructor() { }

  @HostBinding('class.ant-layout') layoutClass = true;

  @HostBinding('class.ant-layout-has-sider') layoutHasSider = true;

  ngOnInit() {
  }

}
