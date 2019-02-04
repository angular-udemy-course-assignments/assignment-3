import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-logger',
  templateUrl: './display-logger.component.html',
  styleUrls: ['./display-logger.component.css']
})
export class DisplayLoggerComponent implements OnInit {

  content = 'Secret Password = tuna';
  isContentVisible = false;
  togglingLog = [];
  limit = 5;

  constructor() { }

  ngOnInit() {
  }

  toggleContent() {
    const timestamp = new Date().getTime();
    this.togglingLog.push(timestamp);
    this.isContentVisible = !this.isContentVisible;
  }

  getColor(i: number): string {
    if (i >= this.limit) {
      return 'blue';
    } else {
      return 'white';
    }
  }
}
