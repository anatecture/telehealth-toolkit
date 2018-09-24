import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Page1Component } from './page1/page1.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { GeneralQuestionsComponent } from './general-questions/general-questions.component';
import { CardComponent } from './card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GettingProvidersComponent } from './getting-providers/getting-providers.component';
import { ToolkitStaffComponent } from './toolkit-staff/toolkit-staff.component';
import { ToolkitProgramsComponent } from './toolkit-programs/toolkit-programs.component';
import { ToolkitExperienceComponent } from './toolkit-experience/toolkit-experience.component';
import { ToolkitBestComponent } from './toolkit-best/toolkit-best.component';
import { ToolkitMarketingComponent } from './toolkit-marketing/toolkit-marketing.component';
import { ToolkitResourcesComponent } from './toolkit-resources/toolkit-resources.component';
import { ToolkitMarketingDigitalComponent } from './toolkit-marketing-digital/toolkit-marketing-digital.component';
import { ToolkitExperienceHistoryComponent } from './toolkit-experience-history/toolkit-experience-history.component';
import { DigitalPostersComponent } from './digital-posters/digital-posters.component';
import { PreceptorChampionsComponent } from './preceptor-champions/preceptor-champions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Page1Component,
    HomeComponent,
    FaqComponent,
    GeneralQuestionsComponent,
    CardComponent,
    SidebarComponent,
    GettingProvidersComponent,
    ToolkitStaffComponent,
    ToolkitProgramsComponent,
    ToolkitExperienceComponent,
    ToolkitBestComponent,
    ToolkitMarketingComponent,
    ToolkitResourcesComponent,
    ToolkitMarketingDigitalComponent,
    ToolkitExperienceHistoryComponent,
    DigitalPostersComponent,
    PreceptorChampionsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
