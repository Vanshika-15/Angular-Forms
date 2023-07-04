import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  sampleForm: FormGroup;


  constructor(private formbuilder:FormBuilder){
    this.sampleForm=formbuilder.group({
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      age:new FormControl('',Validators.required)

    })
}

  submit(sampleForm:any){
    console.log(this.sampleForm.value);
    this.sampleForm.reset();
  }

fill(sampleForm:any){
  this.sampleForm.setValue({
    "name":'Sagar',
    "email":"ssidana38@gmail.com",
    "age":'23'
  })
}


  }

