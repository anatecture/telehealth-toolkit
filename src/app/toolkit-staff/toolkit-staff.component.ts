import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolkit-staff',
  templateUrl: './toolkit-staff.component.html',
  styleUrls: ['./toolkit-staff.component.scss']
})
export class ToolkitStaffComponent implements OnInit {

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
