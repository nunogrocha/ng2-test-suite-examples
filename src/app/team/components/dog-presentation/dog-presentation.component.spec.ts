import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogPresentationComponent } from './dog-presentation.component';
import { TeamModuleModule } from '../../team-module.module';

describe('DogPresentationComponent', () => {
  let component: DogPresentationComponent;
  let fixture: ComponentFixture<DogPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TeamModuleModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogPresentationComponent);
    component = fixture.componentInstance;
    component.race = "lel";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
