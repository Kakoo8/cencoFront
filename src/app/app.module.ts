import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CitieComponent } from './components/citie/citie.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    
    CitieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
