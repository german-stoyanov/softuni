import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatSingleComponent } from './flat-single.component';

describe('FlatSingleComponent', () => {
  let component: FlatSingleComponent;
  let fixture: ComponentFixture<FlatSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
