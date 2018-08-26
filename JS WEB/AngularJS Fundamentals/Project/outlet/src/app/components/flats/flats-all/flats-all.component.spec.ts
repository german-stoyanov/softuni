import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatsAllComponent } from './flats-all.component';

describe('FlatsAllComponent', () => {
  let component: FlatsAllComponent;
  let fixture: ComponentFixture<FlatsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
