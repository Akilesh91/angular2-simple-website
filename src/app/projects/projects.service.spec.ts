import { TestBed, inject } from '@angular/core/testing';

import { MoreeventsService } from './moreevents.service';

describe('MoreeventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoreeventsService]
    });
  });

  it('should be created', inject([MoreeventsService], (service: MoreeventsService) => {
    expect(service).toBeTruthy();
  }));
});
