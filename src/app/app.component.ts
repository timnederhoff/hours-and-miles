import { Component } from '@angular/core';
import { CdkColumnDef } from '@angular/cdk/table';

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
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CdkColumnDef ]
})
export class AppComponent {
  initData = INIT_DATA;
  displayedColumns: string[] = ['date', 'duration', 'category', 'detail', 'distance'];
  today = new Date();
}
