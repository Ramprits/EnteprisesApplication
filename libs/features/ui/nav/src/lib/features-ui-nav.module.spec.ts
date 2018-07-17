import { async, TestBed } from '@angular/core/testing';
import { FeaturesUiNavModule } from './features-ui-nav.module';

describe('FeaturesUiNavModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [FeaturesUiNavModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(FeaturesUiNavModule).toBeDefined();
  });
});
