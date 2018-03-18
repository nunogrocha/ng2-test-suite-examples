import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogPresentationComponent } from './dog-presentation.component';

describe('DogPresentationComponent', () => {
  let component: DogPresentationComponent;
  let fixture: ComponentFixture<DogPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
