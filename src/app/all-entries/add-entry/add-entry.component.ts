import { Component, Input } from '@angular/core';
import { HourMileService } from '../../hour-mile.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent {

  @Input() dataSource;
  today = Date.now();

  constructor(private hourMileService: HourMileService) { }

  addEntry(date: Date, duration: number, category: string, detail: string, distance: number) {
    this.hourMileService.addEntry({
      date: date,
      duration: duration,
      category: category,
      detail: detail,
      distance: distance
    });
    this.dataSource.data = this.hourMileService.getData();
  }

}
