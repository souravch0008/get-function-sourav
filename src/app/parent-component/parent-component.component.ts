import { Component, OnInit } from '@angular/core';

  @Component({
      selector: 'app-parent-component',
      templateUrl: './parent-component.component.html',
      styleUrls: ['./parent-component.component.css']
   })
   export class ParentComponentComponent implements OnInit {
  
      data = {
         name1:'jack',
         Money1:10,
         name2:'Jill',
         Money2:'15'
      }
  constructor() { }

  ngOnInit() {
  }
  incrementJack(){
    this.data.Money1 += 10;
  }

  incrementJill(){
    let amount = parseInt(this.data.Money2) + 10;
    this.data.Money2 = amount.toString();
  }
  decrementJack(){
    this.data.Money1 -= 10;
  }

  decrementJill(){
    let amount = parseInt(this.data.Money2) - 10;
    this.data.Money2 = amount.toString();
  }
  }