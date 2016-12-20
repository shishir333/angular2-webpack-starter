import {Component} from '@angular/core';

import { DemoService } from '../shared/services/demoService';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers:[DemoService]
})


export class HomeComponent
{
    constructor(private _hello:DemoService)
    {
//        this._hello.getVariable();
  }

val () {
console.log(this._hello.getVariable());
};


}