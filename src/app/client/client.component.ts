import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public client: Client;

  constructor() {
    this.client = new Client('Неуймина', 'Клавдия', 'Аскольдовна',
      '+79820001122', 'mary@gmail.com', 'www.mary.com');
  }

  ngOnInit() {}

}

export class Client {
  public surname: string;
  public name: string;
  public middleName: string;
  public phoneNumber: string;
  public email: string;
  public website: string;

  constructor (surname, name, middleName, phoneNumber, email, website) {
    // const onlyLetterRegExp = /^[А-Яа-яЁё]*&/;
    // if (!onlyLetterRegExp.test(surname) || !onlyLetterRegExp.test(name) || !onlyLetterRegExp.test(middleName)) {
    //   throw new TypeError();
    // }
    this.surname = surname;
    this.name = name;
    this.middleName = middleName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.website = website;
  }
}
