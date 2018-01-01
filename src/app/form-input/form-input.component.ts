import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  button1Message='';
    values='';
    values2='';
    valuesTwo='';
    valuesEnter='';
    valuesBlur='';
  constructor() { }

  ngOnInit() {
    
  }
  //按钮点击
  button1(){
  	this.button1Message="点击按钮、子组件事件触发！";
  }
  /**
   *输入事件，传入event对象
   * event.target.value 该组件中的值
   * event.key 响应事件按键的值
   * event类型为any，传入整个HTML对象，
   * event类型改为KeyboardEvent
   * 
   */

  onkey(event:KeyboardEvent){
     // this.values+=event.target.value+'-';
     this.values+=(<HTMLInputElement>event.target).value+'-';
      this.values2+=event.key+'|';
  }
  /**
   *使用应用变量获取用户输入，格式#box，值box.value
   * 
   */
  onkeyTwo(value:string){
      this.valuesTwo+=value+'|';
  }
  /**
   *回车键输入获取用户输入数据，格式（keyup.enter）='box.value';
   * 
   */
  onEnter(value:string){
    this.valuesEnter=value+'|';
  }
  onBlur(value:string){
    this.valuesBlur=value+'|';
  }
}
