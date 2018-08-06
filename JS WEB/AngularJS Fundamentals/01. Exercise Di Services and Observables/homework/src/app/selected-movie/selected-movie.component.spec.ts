import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMovieComponent } from './selected-movie.component';

describe('SelectedMovieComponent', () => {
  let component: SelectedMovieComponent;
  let fixture: ComponentFixture<SelectedMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
