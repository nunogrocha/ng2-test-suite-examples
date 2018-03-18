import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamInfoPresentationComponent } from './team-info-presentation.component';

describe('TeamInfoPresentationComponent', () => {
  let component: TeamInfoPresentationComponent;
  let fixture: ComponentFixture<TeamInfoPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamInfoPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamInfoPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
