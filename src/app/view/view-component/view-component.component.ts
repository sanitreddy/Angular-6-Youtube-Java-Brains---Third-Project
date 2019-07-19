import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';
import { HttpClient } from '@angular/common/http';
import { Button } from 'protractor';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
  userName = '';
  response: any;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }


  search() {
    let obs = this.http.get('https://api.github.com/users/' + this.userName);
    obs.subscribe((response) => {
      this.response = response;
      console.log(response);
    });
  }

}
