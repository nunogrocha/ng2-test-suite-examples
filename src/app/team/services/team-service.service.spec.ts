import { TestBed, inject } from '@angular/core/testing';

import { TeamService } from './team-service.service';

describe('TeamServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamService]
    });
  });

  it('should be created', inject([TeamService], (service: TeamService) => {
    expect(service).toBeTruthy();
  }));
});
