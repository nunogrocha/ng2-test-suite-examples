import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListSmartComponent } from './team-list-smart.component';
import { TeamModuleModule } from '../../team-module.module';

describe('TeamListSmartComponent', () => {
  let component: TeamListSmartComponent;
  let fixture: ComponentFixture<TeamListSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TeamModuleModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
