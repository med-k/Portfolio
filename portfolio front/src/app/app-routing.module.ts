import { EducationComponent } from './component/education/education.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { MotivationComponent } from './component/motivation/motivation.component';
import { SkillsComponent } from './component/skills/skills.component';
import { AboutComponent } from './component/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'motivation', component: MotivationComponent },
  { path: 'skills', component: SkillsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
