import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamInfoPresentationComponent } from './team-info-presentation.component';
import { TeamModuleModule } from '../../../team-module.module';
import { TeamColors } from '../../../team';

describe('TeamInfoPresentationComponent', () => {
  let component: TeamInfoPresentationComponent;
  let fixture: ComponentFixture<TeamInfoPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TeamModuleModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamInfoPresentationComponent);
    component = fixture.componentInstance;
    component.team = {
      name: 'SLB',
      color: TeamColors.Red
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
