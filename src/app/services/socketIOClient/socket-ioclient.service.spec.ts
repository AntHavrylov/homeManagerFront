import { TestBed } from '@angular/core/testing';

import { SocketIOClientService } from './socket-ioclient.service';

describe('SocketIOClientService', () => {
  let service: SocketIOClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketIOClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
