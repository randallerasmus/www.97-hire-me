import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  FieldOfStudy: any = ['Human Resource', 'Information Technology', 'Accounting'];
  selected: any;

  constructor() { }

  ngOnInit() {
  }

}
