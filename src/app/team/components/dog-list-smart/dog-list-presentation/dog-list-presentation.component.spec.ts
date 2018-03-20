import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogListPresentationComponent } from './dog-list-presentation.component';
import { TeamModuleModule } from '../../../team-module.module';

describe('DogListPresentationComponent', () => {
  let component: DogListPresentationComponent;
  let fixture: ComponentFixture<DogListPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TeamModuleModule
      ]
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
