import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-questions',
  templateUrl: './general-questions.component.html',
  styleUrls: ['./general-questions.component.scss']
})
export class GeneralQuestionsComponent implements OnInit {

  links: any;
  constructor() { }

  ngOnInit() {
    //TODO: bring in links via service
    this.links = [
      {"url": "", "text": "Related Link # 1"},
      {"url": "", "text": "Related Link # 2"},
      {"url": "", "text": "Related Link # 3"},
      {"url": "", "text": "Related Link # 4"},
      {"url": "", "text": "Related Link # 5"}
    ]
  }

}
