import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AccordionModule} from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormModelComponent } from './form-model/form-model.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    FormModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
