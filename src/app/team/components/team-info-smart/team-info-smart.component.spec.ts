import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamInfoSmartComponent } from './team-info-smart.component';
import { TeamModuleModule } from '../../team-module.module';
import { TeamColors } from '../../team';

describe('TeamInfoSmartComponent', () => {
  let component: TeamInfoSmartComponent;
  let fixture: ComponentFixture<TeamInfoSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TeamModuleModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamInfoSmartComponent);
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
