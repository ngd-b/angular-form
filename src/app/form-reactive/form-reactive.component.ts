import { Component, OnInit,Input,OnChanges } from '@angular/core';
import {FormArray,FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';

import {CityInfo,Condition,provinces,roads} from './data-modle';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
	cityForm:FormGroup;
	bool=false;

  @Input() cityInfo:CityInfo;
  @Input() isShow:Boolean;
	province=provinces;
  constructor(private fb:FormBuilder) { 
  	this.creatForm();
  }

  ngOnInit() {
    this.bool = true;
  }
  creatForm(){
  	this.cityForm = this.fb.group({
  		cityId:['',Validators.required],
  		roadId:'',
  		province:'',
      specialCondition:this.fb.array([])
  	});
  }
  setCondition(conditions:Condition[]){
      const conditionFGs = conditions.map(condition=>
        this.fb.group(condition));
      const conditionFormArray = this.fb.array(conditionFGs);
      this.cityForm.setControl('specialCondition',conditionFormArray);
  }
  get specialCondition(): FormArray {
    return this.cityForm.get('specialCondition') as FormArray;
  }
  addSpecialCondition(){
    this.specialCondition.push(this.fb.group(new Condition()));
  }
  OnChanges(){
    this.cityForm.reset({
     cityId: this.cityInfo.cityId,
     condition:this.cityInfo.condition[0]||new Condition()
    });
  }
 /* cityForm = new FormGroup({
  	name:new FormControl()
  });*/
  
}
