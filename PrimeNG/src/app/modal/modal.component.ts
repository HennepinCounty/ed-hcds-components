import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild('btnModalExample') btnModalExample!: ElementRef<HTMLInputElement>;
  @ViewChild('btnFormExample') btnFormExample!: ElementRef<HTMLInputElement>;

  showFormModal: boolean = false;
  formModalForm!: FormGroup;

  constructor(
    private confirmationService: ConfirmationService,
    ) { }

  ngOnInit() {
    this.formModalForm = this.createFormGroup();
  }

  //Create form group - Needed for form field 
  createFormGroup(){
    return new FormGroup({
      radioExample: new FormControl(1),
    })
  }
  
  //On submit - save button clicked - open dialog yes/no
  onSubmit(){
    this.confirmationService.confirm({
      message: 'Are you sure you want to save?',
      key: 'confirmModalExample',
        accept: () => {
          console.log('Yes');
          }, 
        reject: () => {
          console.log('No');
          //focus back on openButton 
          this.btnModalExample.nativeElement.focus();
          this.confirmationService.close();
        }
      });
  }

  //Open from modal, called on button click 
  openFormModal() {
    this.showFormModal = true;
  }

  //Close form modal, called on button click / onClose or reject 
  closeFormModal() {
    this.showFormModal = false;
  }

}
