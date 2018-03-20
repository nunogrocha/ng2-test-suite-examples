import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogListSmartComponent } from './dog-list-smart.component';
import { TeamModuleModule } from '../../team-module.module';

describe('DogListSmartComponent', () => {
  let component: DogListSmartComponent;
  let fixture: ComponentFixture<DogListSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TeamModuleModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogListSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
