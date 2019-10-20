import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkColumnDef } from '@angular/cdk/table';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortable } from '@angular/material/sort';
import { DomSanitizer } from '@angular/platform-browser';
import { Entry, HourMileService } from './hour-mile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CdkColumnDef ]
})
export class AppComponent implements OnInit {
  @ViewChild(MatTable, {static: false}) table: MatTable<any>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource: MatTableDataSource<Entry>;
  displayedColumns: string[] = ['date', 'duration', 'category', 'detail', 'distance', 'controls'];
  today = Date.now();

  constructor(private sanitizer: DomSanitizer, private hourMileService: HourMileService) {
    this.dataSource = new MatTableDataSource<Entry>(hourMileService.getData());
  }

  addEntry(date: Date, duration: number, category: string, detail: string, distance: number) {
    this.hourMileService.addEntry({
      date: date,
      duration: duration,
      category: category,
      detail: detail,
      distance: distance
    });
    this.dataSource.data = this.hourMileService.getData();
    // to update table:
    // this.dataSource.filter = '';
  }

  ngOnInit(): void {
    this.sort.sort(<MatSortable>{id: 'date', start: 'asc'});
    this.dataSource.sort = this.sort;
  }

  deleteRowData(entry: Entry){
    this.hourMileService.deleteEntry(entry);
    this.dataSource.data = this.hourMileService.getData();
  }

  readData(event: any) {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], "UTF-8");
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string') {
        this.hourMileService.setData(this.parseMilesAndHours(JSON.parse(fileReader.result)));
      }
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }

  private parseMilesAndHours(raw: any) {
    const parsed: Entry[] = [];
    raw.forEach(rawEntry => {
      parsed.push({
        date: new Date(rawEntry.date),
        duration: rawEntry.duration,
        category: rawEntry.category,
        detail: rawEntry.detail,
        distance: rawEntry.distance
      });
    });
    return parsed;
  }

  getUrl() {
    const url = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify({greet: 'hi me!'}));
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
