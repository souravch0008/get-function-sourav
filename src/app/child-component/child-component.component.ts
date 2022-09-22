import { Component, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  @Input() name;

  constructor() {}

  ngOnInit() {}
  getMoney1(){
    this.name.Money1+=5;
  }
  getMoney2(){
    let amount = parseInt(this.name.Money2) + 5;
    this.name.Money2 = amount.toString();
  }
}
