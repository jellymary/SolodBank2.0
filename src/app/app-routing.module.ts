import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GetPaymentComponent} from './client/forms/get-payment/get-payment.component';
import {PaymentComponent} from './client/forms/payment/payment.component';
import {AnyBankComponent} from './client/forms/any-bank/any-bank.component';
import {OwnBankComponent} from './client/forms/own-bank/own-bank.component';

const routes: Routes = [
  {path: 'payment', redirectTo: 'payment/any-bank'},
  {path: 'payment', component: PaymentComponent, children: [
      {path: 'any-bank', component: AnyBankComponent},
      {path: 'own-bank', component: OwnBankComponent}
    ]},
  {path: 'get-payment', component: GetPaymentComponent},
  {path: '**', redirectTo: 'payment/any-bank'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
