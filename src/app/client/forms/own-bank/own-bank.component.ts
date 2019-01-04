import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {MyServerComponent, ServerAnswer} from '../../../my-server/my-server.component';

@Component({
  selector: 'app-own-bank',
  templateUrl: './own-bank.component.html',
  styleUrls: ['./own-bank.component.css']
})
export class OwnBankComponent implements OnInit {

  constructor(private readonly http: HttpClient) { }

  ngOnInit() { }

  submit(form: NgForm) {
    // console.log(form.value);
    this.http
      .post<ServerAnswer>(MyServerComponent.address + "/forms/own-bank", form.value)
      .subscribe(function (res) {
        console.log(res.success ? 'success' : 'error :(');
      });
  }

}
