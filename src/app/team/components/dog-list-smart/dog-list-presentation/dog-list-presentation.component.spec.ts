import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogListPresentationComponent } from './dog-list-presentation.component';

describe('DogListPresentationComponent', () => {
  let component: DogListPresentationComponent;
  let fixture: ComponentFixture<DogListPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogListPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
