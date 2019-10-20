import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  @Input() dataSource;

  getStats() {
    const reducer = (acc, cur) => {
      acc[cur.date.getMonth()] = (acc[cur.date.getMonth()] || 0) + cur.duration;
      return acc;
    };
    return this.dataSource.data.reduce(reducer, {});
  }

  getTotalDuration(): number {
    return this.dataSource.data.map(o => o.duration).reduce((a, c) => a + c, 0);
  }

}
