import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolkit-marketing-digital',
  templateUrl: './toolkit-marketing-digital.component.html',
  styleUrls: ['./toolkit-marketing-digital.component.css']
})
export class ToolkitMarketingDigitalComponent implements OnInit {

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
