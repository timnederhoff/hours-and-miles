import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEntriesComponent } from './all-entries.component';

describe('AllEntriesComponent', () => {
  let component: AllEntriesComponent;
  let fixture: ComponentFixture<AllEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
