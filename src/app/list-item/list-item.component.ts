import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input()
  firstname = '';

  @Input()
  lastname = '';

  @Input()
  age = 0;

  constructor() { }

  ngOnInit(): void {
  }
}
