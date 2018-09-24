import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolkit-experience-history',
  templateUrl: './toolkit-experience-history.component.html',
  styleUrls: ['./toolkit-experience-history.component.css']
})
export class ToolkitExperienceHistoryComponent implements OnInit {

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
