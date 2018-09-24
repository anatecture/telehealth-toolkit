import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-posters',
  templateUrl: './digital-posters.component.html',
  styleUrls: ['./digital-posters.component.css']
})
export class DigitalPostersComponent implements OnInit {
  links: any;
  constructor() { }

  ngOnInit() {
    this.links = [
      {"url": "#", "text": "One Link with a very,very long title"},
      {"url": "#", "text": "One Link Regular Length"},
      {"url": "#", "text": "One Link with a very,very long title"},
      {"url": "#", "text": "One Link Regular Length"}
    ];
  }

}
