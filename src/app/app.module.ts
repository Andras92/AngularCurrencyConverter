import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyFromComponent } from './currency-from/currency-from.component';
import { CurrencyToComponent } from './currency-to/currency-to.component';


@NgModule({
  declarations: [AppComponent, CurrencyFromComponent, CurrencyToComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
