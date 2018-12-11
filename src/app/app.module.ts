import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { FormsComponent } from './client/forms/forms.component';
import { GetPaymentComponent } from './client/forms/get-payment/get-payment.component';
import { PaymentComponent } from './client/forms/payment/payment.component';
import { AnyBankComponent } from './client/forms/any-bank/any-bank.component';
import { OwnBankComponent } from './client/forms/own-bank/own-bank.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    FormsComponent,
    GetPaymentComponent,
    PaymentComponent,
    AnyBankComponent,
    OwnBankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
