import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
    const queryString = '?' + Object.entries(form.value).map(entry => entry.join('=')).join('&');
    const headers = new HttpHeaders().set('Accept', 'application/pdf');
    this.http
      .get(MyServerComponent.address + "/forms/own-bank" + queryString,{responseType: 'blob', headers: headers} )
      .subscribe(response => OwnBankComponent.downLoadFile(response, "application/pdf"));
  }

  private static downLoadFile(response: any, type: string) {
    const blob = new Blob([response], {type: type});
    const url = window.URL.createObjectURL(blob);
    const pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
      alert( 'Please disable your Pop-up blocker and try again');
    }
  }

}
