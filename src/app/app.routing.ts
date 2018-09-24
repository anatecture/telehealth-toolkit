
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FaqComponent } from './faq/faq.component';
import { GeneralQuestionsComponent } from './general-questions/general-questions.component';
import { HomeComponent } from './home/home.component';
import { ToolkitBestComponent } from './toolkit-best/toolkit-best.component';
import { ToolkitExperienceHistoryComponent } from './toolkit-experience-history/toolkit-experience-history.component';
import { ToolkitMarketingComponent } from './toolkit-marketing/toolkit-marketing.component';
import { ToolkitMarketingDigitalComponent } from './toolkit-marketing-digital/toolkit-marketing-digital.component';
import { ToolkitProgramsComponent } from './toolkit-programs/toolkit-programs.component';
import { ToolkitResourcesComponent } from './toolkit-resources/toolkit-resources.component';
import { ToolkitStaffComponent } from './toolkit-staff/toolkit-staff.component';
import { GettingProvidersComponent } from './getting-providers/getting-providers.component';
import { DigitalPostersComponent } from './digital-posters/digital-posters.component';
import { ToolkitExperienceComponent } from './toolkit-experience/toolkit-experience.component';
import { PreceptorChampionsComponent } from './preceptor-champions/preceptor-champions.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'questions', component: GeneralQuestionsComponent},
  { path: 'best-practices', component: ToolkitBestComponent},
  { path: 'experience', component: ToolkitExperienceComponent},
  { path: 'experience-history', component: ToolkitExperienceHistoryComponent},
  { path: 'marketing', component: ToolkitMarketingComponent},
  { path: 'marketing-digital', component: ToolkitMarketingDigitalComponent},
  { path: 'programs', component: ToolkitProgramsComponent},
  { path: 'resources', component: ToolkitResourcesComponent},
  { path: 'staff', component: ToolkitStaffComponent},
  { path: 'getting-providers', component: GettingProvidersComponent},
  { path: 'digital-posters', component: DigitalPostersComponent},
  { path: 'preceptor-champions', component: PreceptorChampionsComponent},
  { path: '**', redirectTo: 'home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
