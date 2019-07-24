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
  public highlightColor = "darkblue"
  public hello = "";
  public message = "";

  public messageClasses = {
    "text-sucess": this.hasError,
    "text-danger": !this.hasError,
    "text-special": this.hasError
  }

  public titleStyles = {
    color: "brown",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit() {
  }

  helloUser() {
    return "Hello " + this.name + " from helloUser() component class";
  }

  onClick(event) {
    //this.hello = event.type;
    this.hello = "hello";
  }

  logMessage(value) {
    this.message = "Go check your console";
    console.log("You type: " + value);
  }

}
