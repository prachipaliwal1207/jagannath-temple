import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AartiTimingComponent } from './aarti-timing.component';

describe('AartiTimingComponent', () => {
  let component: AartiTimingComponent;
  let fixture: ComponentFixture<AartiTimingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AartiTimingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AartiTimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
