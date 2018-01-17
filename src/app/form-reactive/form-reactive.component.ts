import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';

import {CityInfo,Condition,provinces} from './data-modle';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
	cityForm:FormGroup;
	
	province=provinces;
  constructor(private fb:FormBuilder) { 
  	this.creatForm();
  }

  ngOnInit() {
  }
  creatForm(){
  	this.cityForm = this.fb.group({
  		cityId:['',Validators.required],
  		roadId:'',
  		province:'',
      condition:this.fb.group(new Condition())
  	});
  }
 /* cityForm = new FormGroup({
  	name:new FormControl()
  });*/
  
}
