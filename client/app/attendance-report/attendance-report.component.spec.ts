import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceReportComponent } from './attendance-report.component';

describe('AttendanceReportComponent', () => {
  let component: AttendanceReportComponent;
  let fixture: ComponentFixture<AttendanceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
