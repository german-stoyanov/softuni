import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatsCreateComponent } from './flats-create.component';

describe('FlatsCreateComponent', () => {
  let component: FlatsCreateComponent;
  let fixture: ComponentFixture<FlatsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
