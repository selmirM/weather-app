import { TestBed } from '@angular/core/testing';
import { ApixuService } from './apixu.service';
import { HttpClientTestingModule,  } from '@angular/common/http/testing';

describe('ApixuService', () => {
  let service: ApixuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApixuService]
    });
    service = TestBed.inject(ApixuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
