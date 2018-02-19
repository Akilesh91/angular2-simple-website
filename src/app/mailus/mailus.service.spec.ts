import { TestBed, inject } from '@angular/core/testing';

import { MailusService } from './mailus.service';

describe('MailusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailusService]
    });
  });

  it('should be created', inject([MailusService], (service: MailusService) => {
    expect(service).toBeTruthy();
  }));
});
