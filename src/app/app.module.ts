import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MySurveyComponent } from './my-survey.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    MySurveyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
