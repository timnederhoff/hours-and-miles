import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkColumnDef } from '@angular/cdk/table';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortable } from '@angular/material/sort';
import { DomSanitizer } from '@angular/platform-browser';

interface Entry {
  date: Date;
  duration: number;
  category: string;
  detail: string;
  distance: number;
}

const INIT_DATA: Entry[] = [
  {
    date: new Date('05-06-2015'),
    duration: 9,
    category: 'Customer',
    detail: 'German Railways',
    distance: 42
  },
  {
    date: new Date('11-2-2012'),
    duration: 3,
    category: 'Free',
    detail: 'Festival',
    distance: 3
  },
  {
    date: new Date('02-03-2011'),
    duration: 3,
    category: 'Sick',
    detail: 'fever',
    distance: 3
  }
];

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

  constructor(private sanitizer: DomSanitizer) {
    this.dataSource = new MatTableDataSource(INIT_DATA);
  }

  addToTable(date: Date, duration: number, category: string, detail: string, distance: number) {
    this.dataSource.data.push({
      date: date,
      duration: duration,
      category: category,
      detail: detail,
      distance: distance
    });
    // to update table:
    this.dataSource.filter = '';
    console.log('dataSource:', this.dataSource.data)
  }

  ngOnInit(): void {
    this.sort.sort(<MatSortable>{id: 'date', start: 'asc'});
    this.dataSource.sort = this.sort;
  }

  deleteRowData(entry: Entry){
    this.dataSource.data = this.dataSource.data.filter(obj => obj != entry);
  }

  readData(event: any) {
    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], "UTF-8");
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string') {
        this.dataSource.data = this.parseMilesAndHours(JSON.parse(fileReader.result));
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
