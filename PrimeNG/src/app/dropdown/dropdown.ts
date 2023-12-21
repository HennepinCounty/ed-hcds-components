import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  formDropdownForm!: FormGroup;
  colorOptions = ['Red', 'Green', 'Blue'];
  constructor() { }

  ngOnInit() {
    this.formDropdownForm = this.createFormGroup();
  }

  //Create form group - Needed for form field 
  createFormGroup(){
    return new FormGroup({
      dropdownExample: new FormControl(1),
    })
  }
}
