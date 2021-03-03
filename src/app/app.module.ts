import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Test4Component } from './test4/test4.component';
import { GroupTestComponent } from './group-test/group-test.component';

@NgModule({
  declarations: [
    AppComponent,
    Test4Component,
    GroupTestComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
