import { TestBed } from '@angular/core/testing';

import { FercFormParserService } from './ferc-form-parser.service';

describe('FercFormParserService', () => {
  let service: FercFormParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FercFormParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
