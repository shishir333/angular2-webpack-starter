/**
 * Created by achauhan on 11/11/2016.
 */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent
    ],
    bootstrap: [ AppComponent ]
})
   
export class AppModule { }
