import { TestBed, inject } from '@angular/core/testing';

import { CoreModule } from '../core.module';
import { HeroService } from './hero.service';

describe('PatientConsentPersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule
      ],
      providers: [
        HeroService
      ]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
