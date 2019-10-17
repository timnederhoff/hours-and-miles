import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkColumnDef } from '@angular/cdk/table';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortable } from '@angular/material/sort';

interface Entry {
  date: Date;
  duration: number;
  category: string;
  detail: string;
  distance: number;
}

const INIT_DATA: Entry[] = [
  {
    date: new Date('11-1-2012'),
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
    category: 'Free',
    detail: 'Festival',
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

  constructor() {
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
    this.dataSource.filter ='';
    this.table.renderRows();
    console.log('dataSource:', this.dataSource.data)
  }

  ngOnInit(): void {
    this.sort.sort(<MatSortable>{id: 'date', start: 'asc'});
    this.dataSource.sort = this.sort;
  }
}
