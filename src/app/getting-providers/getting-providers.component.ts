import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getting-providers',
  templateUrl: './getting-providers.component.html',
  styleUrls: ['./getting-providers.component.css']
})
export class GettingProvidersComponent implements OnInit {

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
