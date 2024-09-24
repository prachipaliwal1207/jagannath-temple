import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleTimingComponent } from './temple-timing.component';

describe('TempleTimingComponent', () => {
  let component: TempleTimingComponent;
  let fixture: ComponentFixture<TempleTimingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TempleTimingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempleTimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
