import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {
  radioButtonForm!: FormGroup;
  boolCheckboxExample: boolean = false;

  constructor() { }

  ngOnInit() {
    this.radioButtonForm = this.createFormGroup();
  }

  //Create form group - Needed for form field 
  createFormGroup(){
    return new FormGroup({
      radioButtonExample: new FormControl(1),
    })
  }

  get radioButtonExample() { return this.radioButtonForm.get('radioButtonExample'); }
  get formControls() { return this.radioButtonForm.controls;}
}
