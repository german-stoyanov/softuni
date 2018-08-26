import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerSingleComponent } from './broker-single.component';

describe('BrokerSingleComponent', () => {
  let component: BrokerSingleComponent;
  let fixture: ComponentFixture<BrokerSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
