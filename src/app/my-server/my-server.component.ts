import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-server',
  templateUrl: './my-server.component.html',
  styleUrls: ['./my-server.component.css']
})
export class MyServerComponent implements OnInit {
  public static address: string = "http://localhost:8000";

  // constructor(private readonly http: HttpClient) {}
  constructor() {}

  ngOnInit() {
  }

}

export class ServerAnswer {
    public success: boolean;
}
