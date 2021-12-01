import { Component, OnInit } from '@angular/core';
import { DATA } from '../list-item/data';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {
  data = DATA.map(item => item);

  constructor() {
  }

  ngOnInit(): void {
  }

  removeItem() {
    this.data = this.data.slice(1);
  }

}
