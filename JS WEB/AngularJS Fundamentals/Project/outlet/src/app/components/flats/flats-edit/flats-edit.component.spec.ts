import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatsEditComponent } from './flats-edit.component';

describe('FlatsEditComponent', () => {
  let component: FlatsEditComponent;
  let fixture: ComponentFixture<FlatsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
