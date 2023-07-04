import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  reg: any={}

  regData(data:NgForm){
    this.reg =data.form.value;
    alert('You are Logged in successfully!');
    console.log(data.form.value);

  }


}
