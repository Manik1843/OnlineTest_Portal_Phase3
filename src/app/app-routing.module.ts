import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterformComponent } from './registerform/registerform.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path:'registerform',component:RegisterformComponent},
  {path:'login-form',component: LoginFormComponent},
  {path:'add-question', component:AddQuestionComponent},
  {path:'quiz',component:QuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
