import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColleagueCreateComponent } from './colleague-create/colleague-create.component';
import { ColleagueListComponent } from './colleague-list/colleague-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ColleagueCreateComponent,
    ColleagueListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
