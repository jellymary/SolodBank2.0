import { BrowserModule } from '@angular/platform-browser';
import {Directive, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { FormsComponent } from './client/forms/forms.component';
import { GetPaymentComponent } from './client/forms/get-payment/get-payment.component';
import { PaymentComponent } from './client/forms/payment/payment.component';
import { AnyBankComponent } from './client/forms/any-bank/any-bank.component';
import { OwnBankComponent } from './client/forms/own-bank/own-bank.component';
import { MyServerComponent } from './my-server/my-server.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    FormsComponent,
    GetPaymentComponent,
    PaymentComponent,
    AnyBankComponent,
    OwnBankComponent,
    MyServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
