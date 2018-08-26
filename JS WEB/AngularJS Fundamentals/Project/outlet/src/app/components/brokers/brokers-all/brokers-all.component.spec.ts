import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokersAllComponent } from './brokers-all.component';

describe('BrokersAllComponent', () => {
  let component: BrokersAllComponent;
  let fixture: ComponentFixture<BrokersAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokersAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokersAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
