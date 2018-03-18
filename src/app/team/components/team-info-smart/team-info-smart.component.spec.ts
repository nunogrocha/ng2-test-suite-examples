import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamInfoSmartComponent } from './team-info-smart.component';

describe('TeamInfoSmartComponent', () => {
  let component: TeamInfoSmartComponent;
  let fixture: ComponentFixture<TeamInfoSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamInfoSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamInfoSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
