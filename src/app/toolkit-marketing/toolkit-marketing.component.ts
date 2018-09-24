import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolkit-marketing',
  templateUrl: './toolkit-marketing.component.html',
  styleUrls: ['./toolkit-marketing.component.css']
})
export class ToolkitMarketingComponent implements OnInit {

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
