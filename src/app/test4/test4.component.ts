import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component implements OnInit {
  items: any = new Map();
  itemsArr: any = [];
  inputItem: string;

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    if (this.inputItem) { 
      this.items.set(this.inputItem, true);
      this.hashToArray();
    }
  }

  keyPress(event: any) { 
    if (event.key == "Enter") { 
      this.addItem();
    }
  }

  removeItem() {
    this.items.delete(this.inputItem);
    this.hashToArray();
  }

  clearList() { 
    this.items.clear();
    this.hashToArray();
  }

  hashToArray() { 
    this.itemsArr = Array.from(this.items);
  }

}
