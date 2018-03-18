import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListPresentationComponent } from './team-list-presentation.component';

describe('TeamListPresentationComponent', () => {
  let component: TeamListPresentationComponent;
  let fixture: ComponentFixture<TeamListPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamListPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
