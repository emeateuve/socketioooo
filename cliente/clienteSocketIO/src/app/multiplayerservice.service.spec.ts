import { TestBed, inject } from '@angular/core/testing';

import { MultiplayerserviceService } from './multiplayerservice.service';

describe('MultiplayerserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultiplayerserviceService]
    });
  });

  it('should be created', inject([MultiplayerserviceService], (service: MultiplayerserviceService) => {
    expect(service).toBeTruthy();
  }));
});
