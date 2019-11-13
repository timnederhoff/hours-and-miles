import { Component, Input, OnInit } from '@angular/core';
import { Entry, HourMileService } from '../hour-mile.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  data: Entry[];
  columsToDisplay = ['month', 'duration', 'distance'];

  constructor(private hourMileService: HourMileService) {
    this.data = this.hourMileService.getData();
  }

  getStats() {
    const reducer = (acc, cur) => {
      const month = cur.date.getMonth();
      if (!acc[month]) {
        acc[month] = {
          duration: 0,
          distance: 0
        } ;
      }
      acc[month] = {
        duration: acc[month].duration + cur.duration,
        distance: acc[month].distance + cur.distance
      } ;
      return acc;
    };
    return this.data.reduce(reducer, {});
  }

  getTotals() {
    const totals = this.data.reduce((a, c) => {
      a.duration += c.duration;
      a.distance += c.distance;
      return a;
    }, { duration: 0, distance: 0 });
    return totals;
  }

}
