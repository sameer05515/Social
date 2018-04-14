import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListOfStatusComponent } from './list-of-status/list-of-status.component';


@NgModule({
  declarations: [
    AppComponent,
    ListOfStatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
