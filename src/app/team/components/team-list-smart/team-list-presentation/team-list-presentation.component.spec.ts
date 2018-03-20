import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListPresentationComponent } from './team-list-presentation.component';
import { TeamColors } from '../../../team';
import { TeamModuleModule } from '../../../team-module.module';

describe('TeamListPresentationComponent', () => {
  let component: TeamListPresentationComponent;
  let fixture: ComponentFixture<TeamListPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TeamModuleModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListPresentationComponent);
    component = fixture.componentInstance;
    component.teams = [
      {
        name: 'SLB',
        color: TeamColors.Red
      },
      {
        name: 'FCP',
        color: TeamColors.Blue
      },
      {
        name: 'SCP',
        color: TeamColors.Green
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
