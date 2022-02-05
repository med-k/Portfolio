import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { AcceuilComponent } from './component/acceuil/acceuil.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { EducationComponent } from './component/education/education.component';
import { SkillsComponent } from './component/skills/skills.component';
import { MotivationComponent } from './component/motivation/motivation.component';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AcceuilComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    MotivationComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
