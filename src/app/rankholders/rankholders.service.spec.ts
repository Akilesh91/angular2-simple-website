import { TestBed, inject } from '@angular/core/testing';

import { RankholdersService } from './rankholders.service';

describe('RankholdersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RankholdersService]
    });
  });

  it('should be created', inject([RankholdersService], (service: RankholdersService) => {
    expect(service).toBeTruthy();
  }));
});
