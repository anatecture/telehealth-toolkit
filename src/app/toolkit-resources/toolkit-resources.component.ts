import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolkit-resources',
  templateUrl: './toolkit-resources.component.html',
  styleUrls: ['./toolkit-resources.component.css']
})
export class ToolkitResourcesComponent implements OnInit {

  links: any;
  constructor() { }

  ngOnInit() {
    this.links = [
      {"url": "#", "text": "One Link with a very,very long title"},
      {"url": "#", "text": "One Link Regular Length"},
      {"url": "#", "text": "One Link with a very,very long title"},
      {"url": "#", "text": "One Link Regular Length"}
    ]
  }

}
