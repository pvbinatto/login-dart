import { TestBed } from '@angular/core/testing';

import { SidebarcontrolService } from './sidebarcontrol.service';

describe('SidebarcontrolService', () => {
  let service: SidebarcontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarcontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
