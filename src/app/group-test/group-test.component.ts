import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-test',
  templateUrl: './group-test.component.html',
  styleUrls: ['./group-test.component.css']
})
export class GroupTestComponent implements OnInit {
  testArr: any = ['red', 'red', 'red', 'red', 'yellow', 'yellow', 'blue', 'red', 'blue', 'black', 'black', 'black', 'yellow'];
  arrConverted: any = new Map();
  groupInput: any;
  groups: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  findGroup() { 
    this.arrConverted.clear();
    this.convertToHash();
    this.getGroups();
  }

  convertToHash() { 
    for (let i = 0; i < this.testArr.length; i++) { 
      if (!this.arrConverted.has(this.testArr[i])) {
        this.arrConverted.set(this.testArr[i], 1);
      } else { 
        this.arrConverted.set(this.testArr[i], this.arrConverted.get(this.testArr[i]) + 1);
      }
    }
  }

  getGroups() {
    this.groups.splice(0, this.groups.length);
    for (let [key, value] of this.arrConverted) { 
      if (Math.floor(value / this.groupInput) != 0) {
        this.groups.push([key, Math.floor(value / this.groupInput)]);
      }
    }
  }

}
