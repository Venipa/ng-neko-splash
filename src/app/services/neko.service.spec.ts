import { TestBed } from '@angular/core/testing';

import { NekoService } from './neko.service';

describe('NekoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NekoService = TestBed.get(NekoService);
    expect(service).toBeTruthy();
  });
});
