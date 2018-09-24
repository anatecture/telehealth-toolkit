import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  constructor(public router: Router) {}
  home = false;
  location: any;

  ngOnInit() {
    // Inital load and.. switching paths for the side-nav
    this.location = location.pathname;
    if (location.pathname === "/home") {
      this.home = true;
    } else {
      this.home = false;
    }
  }
}
