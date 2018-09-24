import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  links: any;
  constructor() { }

  ngOnInit() {
    //TODO: bring in links via service
    this.links = [
      {"url": "", "text": "Most FAQ # 1"},
      {"url": "", "text": "Most FAQ # 2"},
      {"url": "", "text": "Most FAQ # 3"},
      {"url": "", "text": "Most FAQ # 4"},
      {"url": "", "text": "Most FAQ # 5"},
    ]
  }
}
