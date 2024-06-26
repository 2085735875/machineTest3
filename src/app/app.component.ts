import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild("signUpForm") signUpForm !: NgForm

  onSignUp(signUpForm : NgForm){
    if(signUpForm.valid){
      console.log(signUpForm)
    console.log(signUpForm.value)
    signUpForm.resetForm()
    }
  }
}
