import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-any-bank',
  templateUrl: './any-bank.component.html',
  styleUrls: ['./any-bank.component.css']
})
export class AnyBankComponent implements OnInit {
  public card: CreditCard;

  constructor() { }

  ngOnInit() { }

  onSumChange(number: NgModel){
    console.log(number.model);
  }

  submit(form: NgForm){
    console.log(form);
  }

}

export class AnyBankForm {
  public card: CreditCard;
  public sum: number;
  public comment: string;
  public email: string;

  constructor() { }
}

export class CreditCard {
  public number: string;
  public date: Date;
  public cvc: number;

  constructor(number: string,
              date: Date,
              cvc: number) {
    this.number = number;
    this.date = date;
    this.cvc = cvc;
  }
}
