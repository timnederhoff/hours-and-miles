import { Component, Input, OnInit } from '@angular/core';
import { Entry, HourMileService } from '../hour-mile.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  data: Entry[];

  constructor(private hourMileService: HourMileService) {
    this.data = this.hourMileService.getData();
  }

  getStats() {
    const reducer = (acc, cur) => {
      acc[cur.date.getMonth()] = (acc[cur.date.getMonth()] || 0) + cur.duration;
      return acc;
    };
    return this.data.reduce(reducer, {});
  }

  getTotalDuration(): number {
    return this.data.map(o => o.duration).reduce((a, c) => a + c, 0);
  }

}
