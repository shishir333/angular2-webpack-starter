/**
 * Created by achauhan on 11/11/2016.
 */
import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    directives: [ ROUTER_DIRECTIVES ],
})
@Routes([
    {path: '/home',      component: HomeComponent}
])

export class AppComponent {
    constructor() {}
}