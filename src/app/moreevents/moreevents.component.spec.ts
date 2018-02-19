import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreeventsComponent } from './moreevents.component';

describe('MoreeventsComponent', () => {
  let component: MoreeventsComponent;
  let fixture: ComponentFixture<MoreeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
