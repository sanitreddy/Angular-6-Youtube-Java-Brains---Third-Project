import { Component } from '@angular/core';
import { TestService } from './test.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonStatus = true;

  constructor(private svc: TestService) {
    this.svc.printToConsole('Got the service');
  }

  ngOnInit() {
  }

}
