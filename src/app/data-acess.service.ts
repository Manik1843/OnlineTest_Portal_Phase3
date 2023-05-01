import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataAcessService {

  headers:HttpHeaders;
  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders().set('content-type','application/json');
   }

   //POST - REGISTER FORM!
   RegisterNewUser(formval:any):Observable<any>{
    return this.http.post('api/register-user',formval);
   }

   //POST METHOD - VALIDATE USER ALREADY EXISTS!
   validateLogin(user:any):Observable<boolean>{
    return this.http.post<boolean>('api/validate-login', user);
  }

   //POST METHOD - ADD QUIZ QUESTIONS
   addQuestion(quiz:any):Observable<any>{
    return this.http.post<any>('api/add-question',quiz);

  }

  //GET METHOD - GET ALL QUESTIONS AND ANSWERS
  getQuiz():Observable<any[]>{
    return this.http.get<any[]>('api/quiz');
  }
}
