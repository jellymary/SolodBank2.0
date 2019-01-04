import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MyServerComponent, ServerAnswer} from '../../../my-server/my-server.component';

@Component({
  selector: 'app-any-bank',
  templateUrl: './any-bank.component.html',
  styleUrls: ['./any-bank.component.css']
})
export class AnyBankComponent implements OnInit {

  constructor(private readonly http: HttpClient) { }

  ngOnInit() { }

  submit(form: NgForm){
    this.http
      .post<ServerAnswer>(MyServerComponent.address + "/forms/any-bank", form.value)
      .subscribe(function (res) {
        console.log(res.success ? 'success' : 'error :(');
      });
  }
}
