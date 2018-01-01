import { Component, OnInit } from '@angular/core';

import {Model} from './model';
@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {

	password=['123456','admin','admin123','test'];
	model = new Model(1,'admin',this.password[2],'boy');
  constructor() { }
  	submited=false;
  	onSubmit(){
  		this.submited=true;
  	}

  	get diagonistic(){
  		return JSON.stringify(this.model);
  	}
    addUser(){
      this.model=new Model(10,'','');
    }
  ngOnInit() {
  }
/**
 *
 * 1、数据的双向绑定的是[()],且数据双向绑定时，必须制定name属性
 * 2、验证表单的有效性，样式提示。#name="ngModel"
 * 3、表单验证，有效valid，值改变为假pristine，
 * 4、div有hidden属性，button有disabled属性
 * 5、属性绑定使用[]，意思是由组件流向template，
 * 6、使用()多用于事件，意思是template流向组件
 */
}
