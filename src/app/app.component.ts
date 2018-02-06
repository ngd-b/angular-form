import { Component } from '@angular/core';

import {roads} from './form-reactive/data-modle';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';
  raods = roads;
  isShow=true;
}
