import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokersCreateComponent } from './brokers-create.component';

describe('BrokersCreateComponent', () => {
  let component: BrokersCreateComponent;
  let fixture: ComponentFixture<BrokersCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokersCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
