import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {AccordionModule,TabsModule} from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormModelComponent } from './form-model/form-model.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormActiveComponent } from './form-active/form-active.component';

@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    FormModelComponent,
    FormReactiveComponent,
    FormActiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
