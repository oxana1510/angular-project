import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';
  button = 'Button'

  @Input()
  getList = false

  onClick() {
    if (this.getList == false) {
      this.getList = true
      this.button = 'Button pressed!'
    } else {
      this.getList = false
      this.button = 'Button'
    }

  }
}
