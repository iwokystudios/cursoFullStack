import { TestBed } from '@angular/core/testing';

import { HistoriesService } from './histories.service';

describe('HistoriesService', () => {
  let service: HistoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
