import { TestBed } from '@angular/core/testing';

import { ManagerService } from './manager.service';

describe('ManagerService', () => {
  let service: ManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerService);
  });
//dsfdsaghf
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return id ', () => {
    let hedf= 1;
    service.approve(hedf)
    expect(service.approve(hedf)).toBeTruthy;

  })

});

