import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolkit-programs',
  templateUrl: './toolkit-programs.component.html',
  styleUrls: ['./toolkit-programs.component.css']
})
export class ToolkitProgramsComponent implements OnInit {

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
