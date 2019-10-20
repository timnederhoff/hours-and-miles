import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Entry {
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

@Injectable({
  providedIn: 'root'
})
export class HourMileService {

  data: Entry[];

  constructor() {
    this.data = INIT_DATA;
  }

  getData(): Entry[] {
    return this.data;
  }

  setData(entries: Entry[]) {
    this.data = entries;
  }

  addEntry(entry: Entry) {
    this.data.push(entry);
  }

  deleteEntry(entry: Entry) {
    const index = this.data.indexOf(entry, 0);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }

}
