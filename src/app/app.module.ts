import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TeamModuleModule } from './team/team-module.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TeamModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
