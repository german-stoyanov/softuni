import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatsDetailsComponent } from './flats-details.component';

describe('FlatsDetailsComponent', () => {
  let component: FlatsDetailsComponent;
  let fixture: ComponentFixture<FlatsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
