import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  formCheckboxForm!: FormGroup;
  boolCheckboxExample: boolean = false;

  constructor() { }

  ngOnInit() {
    this.formCheckboxForm = this.createFormGroup();
  }

  //Create form group - Needed for form field 
  createFormGroup(){
    return new FormGroup({
      checkboxExample: new FormControl(false),
    })
  }

  get checkboxExample() { return this.formCheckboxForm.get('checkboxExample'); }
  get formControls() { return this.formCheckboxForm.controls;}

}
