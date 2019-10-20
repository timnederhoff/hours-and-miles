import { Component, OnInit, ViewChild } from '@angular/core';
import { Entry, HourMileService } from '../hour-mile.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortable } from '@angular/material/sort';

@Component({
  selector: 'app-all-entries',
  templateUrl: './all-entries.component.html',
  styleUrls: ['./all-entries.component.css']
})
export class AllEntriesComponent implements OnInit {

  dataSource: MatTableDataSource<Entry>;
  displayedColumns: string[] = ['date', 'duration', 'category', 'detail', 'distance', 'controls'];
  @ViewChild(MatTable, {static: false}) table: MatTable<any>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private hourMileService: HourMileService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Entry>(this.hourMileService.getData());
    this.sort.sort(<MatSortable>{id: 'date', start: 'asc'});
    this.dataSource.sort = this.sort;
  }

  deleteRowData(entry: Entry){
    this.hourMileService.deleteEntry(entry);
    this.dataSource.data = this.hourMileService.getData();
  }

}
