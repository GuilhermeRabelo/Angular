import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "test.component.ts";
  public siteUrl = window.location.href;
  public sucessClass = "text-sucess";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-sucess": this.hasError,
    "text-danger": !this.hasError,
    "text-special": this.hasError
  }

  constructor() { }

  ngOnInit() {
  }

  helloUser() {
    return "Hello " + this.name + " from helloUser() component class";
  }

}
