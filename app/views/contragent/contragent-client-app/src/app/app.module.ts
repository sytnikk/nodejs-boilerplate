import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home.component';
import { NahuiPageComponent } from './pages/nahui/nahui.component';

// form
import { InputComponent } from './abi-form/components/input.component';
import { RadioComponent } from './abi-form/components/radio.component';
import { SelectComponent } from './abi-form/components/select.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NahuiPageComponent,

    InputComponent,
    RadioComponent,
    SelectComponent
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
