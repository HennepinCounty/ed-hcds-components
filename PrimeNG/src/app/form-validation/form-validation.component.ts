import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  showFormModal: boolean = false;
  formModalForm!: FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.formModalForm = this.createFormGroup();
  }

  //Create form group - Needed for form field 
  createFormGroup(){
    return new FormGroup({
      radioExample: new FormControl(1),
    })
  }

}
