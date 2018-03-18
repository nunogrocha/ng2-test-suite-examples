import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from './services/team-service.service';
import { TeamListSmartComponent } from './components/team-list-smart/team-list-smart.component';
import { TeamListPresentationComponent } from './components/team-list-smart/team-list-presentation/team-list-presentation.component';
import { TeamInfoSmartComponent } from './components/team-info-smart/team-info-smart.component';
import { TeamInfoPresentationComponent } from './components/team-info-smart/team-info-presentation/team-info-presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { DogPresentationComponent } from './components/dog-presentation/dog-presentation.component';
import { DogListSmartComponent } from './components/dog-list-smart/dog-list-smart.component';
import { DogListPresentationComponent } from './components/dog-list-smart/dog-list-presentation/dog-list-presentation.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    TeamListSmartComponent,
    TeamListPresentationComponent,
    TeamInfoSmartComponent,
    TeamInfoPresentationComponent,
    DogPresentationComponent,
    DogListSmartComponent,
    DogListPresentationComponent
  ],
  providers: [
    TeamService
  ],
  exports: [
    TeamListSmartComponent,
    TeamListPresentationComponent,
    TeamInfoSmartComponent,
    TeamInfoPresentationComponent,
    DogPresentationComponent,
    DogListSmartComponent,
    DogListPresentationComponent
  ]
})
export class TeamModuleModule { }
