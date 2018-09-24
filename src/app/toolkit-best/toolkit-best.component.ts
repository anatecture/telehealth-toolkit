import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolkit-best',
  templateUrl: './toolkit-best.component.html',
  styleUrls: ['./toolkit-best.component.scss']
})
export class ToolkitBestComponent implements OnInit {
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
