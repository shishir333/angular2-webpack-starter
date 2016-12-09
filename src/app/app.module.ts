/**
 * Created by achauhan on 11/11/2016.
 */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {ROUTER_PROVIDERS} from '@angular/router';
import { AppComponent } from './app.component';
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
