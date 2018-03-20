import { TestBed, inject } from '@angular/core/testing';

import { TeamService } from './team-service.service';
import { TeamModuleModule } from '../team-module.module';

describe('TeamServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TeamModuleModule
      ]
    });
  });

  it('should be created', inject([TeamService], (service: TeamService) => {
    expect(service).toBeTruthy();
  }));
});
