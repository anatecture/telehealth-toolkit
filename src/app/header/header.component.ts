import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  welcomeText: string;
  currentPath: string;
  backgroundImg: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe( (event : Event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath = location.pathname;
        switch(event.url){
          case '/home':
            this.welcomeText = "We are here to help";
            this.backgroundImg = "../../assets/experience_hero_img.jpg";
            break;
          case '/getting-providers':
            this.welcomeText = "Getting Providers Started";
            this.backgroundImg = "../../assets/getting_providers_hero_img.jpg";
            break;
          case '/staff':
            this.welcomeText = "Telehealth Staff Training";
            this.backgroundImg = "../../assets/staff_hero_img.jpg";
            break;
          case '/programs':
            this.welcomeText = "Telehealth Programs";
            this.backgroundImg = "../../assets/programs_hero_img.jpg";
            break;
          case '/experience':
            this.welcomeText = "Telehealth Experience";
            this.backgroundImg = "../../assets/experience_hero_img.jpg";
            break;
          case '/experience-history':
            this.welcomeText = "Telehealth Experience";
            this.backgroundImg = "../../assets/experience_hero_img.jpg";
            break;
          case '/best-practices':
            this.welcomeText = "Best Practices";
            this.backgroundImg = "../../assets/best_hero_img.jpg";
            break;
          case '/marketing':
            this.welcomeText = "Marketing";
            this.backgroundImg = "../../assets/marketing_hero_img.jpg";
            break;
          case '/resources':
            this.welcomeText = "Resources";
            this.backgroundImg = "../../assets/resources_hero_img.jpg";
            break;
          case '/faq':
            this.welcomeText = "Frequently Asked Questions (FAQ)";
            this.backgroundImg = "../../assets/faq_hero_img.jpg";
            break;
          case '/digital-posters':
            this.welcomeText = "Marketing";
            this.backgroundImg = "../../assets/marketing_hero_img.jpg";
            break;
            case '/preceptor-champions':
            this.welcomeText = "Telehealth Staff Training";
            this.backgroundImg = "../../assets/staff_hero_img.jpg";
            break;
          default:
            this.welcomeText = "We are here to help";
            this.backgroundImg = "../../assets/experience_hero_img.jpg";
            break;
        }
      }
    });
  }

  goHome = function(){
      this.router.navigateByUrl('');
  };
}
