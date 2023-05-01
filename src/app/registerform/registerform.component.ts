import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataAcessService } from '../data-acess.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent {

  constructor(private das:DataAcessService){}
  emailPattern = '^[a-zA-Z0-9._]+@[a-zA-z0-9.-]+\\.[a-z]{2,4}$';

  RegisterForm = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.pattern(this.emailPattern), this.emailDomainValidator]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)])
  });
  
  submit(){
    this.das.RegisterNewUser(this.RegisterForm.value).subscribe(data=>alert(data));    
    console.table(this.RegisterForm.value);
  }

  get formvalidation(){
    return this.RegisterForm.controls;
  }

  emailDomainValidator(control:FormControl){
    let email = control.value;

    if(email && email.indexOf("@")!=-1){
      let[first,domain] = email.split("@");
      if(domain!== "gmail.com"){
        return {
          emailDomain:{
            parseDomain:domain
          }
        }
      }
    }
    return null;
  }

}
