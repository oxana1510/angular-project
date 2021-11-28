import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items = ['item1', 'item2', 'item3', 'item4', 'item5'];

  constructor() { }

  ngOnInit(): void {
  }

}
