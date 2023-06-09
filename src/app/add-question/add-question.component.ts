import { Component } from '@angular/core';
import { DataAcessService } from '../data-acess.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
  newQuestion = {
    question: '',   
    choices: ['', ''],
    answerIndex:''
  };
  optionValues: string[] = [];

  constructor(private das:DataAcessService
    ){
    this.optionValues = this.newQuestion.choices.slice();

  }

  addOption() {
    this.newQuestion.choices.push('');
    this.optionValues.push('');
  }

  removeOption(index: number) {
    this.newQuestion.choices.splice(index, 1);
    this.optionValues.splice(index, 1);
  }

  addQuestion(questionForm: any) {
  this.newQuestion.choices = this.optionValues.slice(); 

    console.log(this.newQuestion);    
    this.das.addQuestion(this.newQuestion).subscribe({
      next: data=>alert(data.msg),
      error:err=>alert(err.msg)
    });
    questionForm.resetForm();
    this.newQuestion = {
      question: '',     
      choices: ['', ''],
      answerIndex:''
    };
  }
}