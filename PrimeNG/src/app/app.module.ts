import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//PrimeNG Components
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';

//Components
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown';
import { ModalComponent } from './modal/modal.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TableComponent } from './table/table.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [		
    AppComponent,
    ButtonComponent,
    DropdownComponent,
    ModalComponent,
    RadioButtonComponent,
    CheckboxComponent,
    FormValidationComponent,
    AccordionComponent,
      TableComponent,
      SearchComponent
   ],
  imports: [
    BrowserModule,
    ButtonModule,
    DividerModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    DialogModule,
    RadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    InputTextModule,
    DropdownModule,
    AccordionModule,
    TableModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
