import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cards: any;
  cardColor: string;
  textColor: string;
  buttonColor: string;
  faColor: string;
  location: string;
  hoverCardColor: string;
  hoverTextColor: string;
  hoverButtonColor: string;
  hoverFaColor: string;
  hover: any;
  constructor(public router: Router) { }

  ngOnInit() {
    this.hover = [];
    //TODO: get cards from json, mock for now
    this.location = location.pathname;
    if(location.pathname === '/home'){
      this.cardColor = "#205493";
      this.hoverCardColor = "#ffffff";
      this.textColor = "#ffffff";
      this.hoverTextColor = "#205493";
      this.buttonColor = "#ffffff";
      this.hoverButtonColor = "#0071BC";
      this.faColor = "#0071BC";
      this.hoverFaColor = "#ffffff";
    }
    else{
      this.cardColor = "#ffffff";
      this.hoverCardColor = "#205493";
      this.textColor = "#000000";
      this.hoverTextColor = "#ffffff";
      this.buttonColor = "#0071BC";
      this.hoverButtonColor = "#ffffff";
      this.faColor = "#ffffff";
      this.hoverFaColor = "#0071BC";
    }
    switch(location.pathname){
      case '/home':
          this.cards = [
            {"title": "Getting Providers Started", "description": "Understanding Provider Needs, One on One Training, Talent Management System, and more…", "link":"getting-providers"},
            {"title": "Telehealth Staff Training", "description": "Identifying Veteran Candidates, Parameters for Telehealth Appointments, and more…", "link":"staff"},
            {"title": "Telehealth Programs", "description": "VA Video Connect (VVC), Clinical Video Telehealth (CVT), Home Telehealth, Store and Forward, and Apps", "link":"programs"},
            {"title": "Telehealth Experience", "description": "Veteran Stories, Overcoming Challenges, Tips for Appointments, and History of Telehealth", "link":"experience"},
            {"title": "Best Practices", "description": "Fargo & Facility Education Plans", "link":"best-practices"},
            {"title": "Marketing", "description": "National Announcements, Digital Posters, Print Posters, and Brochures", "link":"marketing"},
            {"title": "Resources", "description": "Technical Support, Forms and Templates, and Contacts", "link":"resources"},
            {"title": "Frequently Asked Questions (FAQ)", "description": "General Questions & Statistical Benefits", "link":"faq"}
          ];
          break;
      case '/getting-providers':
          this.cards = [
            {"title": "Understanding Provider Needs", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
            {"title": "One on One Training", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
            {"title": "Talent Management System", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
            {"title": "Necessary Provider Training", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""}
          ];
          break;
      case '/staff':
        this.cards = [
          {"title": "Identifying Veteran Candidates", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
          {"title": "Parameters for Telehealth Appointments", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
          {"title": "Technical Requirements", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
          {"title": "Scheduling with TMP", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
          {"title": "Empowering Staff", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
          {"title": "Mentorship", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
          {"title": "Troubleshooting", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
          {"title": "Preceptor/Champion Programs", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":"preceptor-champions"}
        ];
        break;
      case '/programs':
        this.cards = [
          {"title": "VA Video Connect (VVC)", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
          {"title": "Clinical Video Telehealth (CVT)", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
          {"title": "Home Telehealth", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
          {"title": "Store and Forward", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
          {"title": "Apps", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""}
        ];
        break;
      case '/experience':
        this.cards = [
          {"title": "Veteran Stories", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
          {"title": "Overcoming Challenges", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
          {"title": "Tips for Appointments", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
          {"title": "History of Telehealth", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":"experience-history"}
        ];
        break;
      case '/best-practices':
        this.cards = [
          {"title": "Fargo", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
          {"title": "Facility Education Plan", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""}
        ];
        break;
      case '/marketing':
        this.cards = [
          {"title": "National Announcements", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
          {"title": "Digital Posters", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":"digital-posters"},
          {"title": "Print Posters", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
          {"title": "Brochures", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""}
        ];
        break;
      case '/resources':
        this.cards = [
          {"title": "Technical Support", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
          {"title": "Forms and Templates", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""},
          {"title": "Contacts", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link":""}
        ];
        break;
      case '/faq':
        this.cards = [
          {"title": "General Questions", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link": ""},
          {"title": "Statistical Benefits", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link": ""}
        ];
        break;
      case '/digital-posters':
        this.cards = [
          {"title": "Digital Poster 1", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link": ""},
          {"title": "Digital Poster 2", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link": ""},
          {"title": "Digital Poster 3", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link": ""},
          {"title": "Digital Poster 4", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link": ""}
        ]
        break;
      case '/preceptor-champions':
        this.cards = [
          {"title": "Preceptor Program", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link": ""},
          {"title": "Champion Program", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor.", "link": ""}
        ]
        break;
    }
    this.hover.length = this.cards.length;
  }

  goToPage = function(link){
    this.router.navigateByUrl(link);
  }

}
