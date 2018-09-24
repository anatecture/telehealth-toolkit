import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-preceptor-champions",
  templateUrl: "./preceptor-champions.component.html",
  styleUrls: ["./preceptor-champions.component.scss"]
})
export class PreceptorChampionsComponent implements OnInit {
  constructor() {}
  links: any;
  ngOnInit() {
    this.links = [
      { url: "#", text: "One Link with a very,very long title" },
      { url: "#", text: "One Link Regular Length" },
      { url: "#", text: "One Link with a very,very long title" },
      { url: "#", text: "One Link Regular Length" }
    ];
  }
  S;
}
