import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team, TeamColors } from '../team';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { APImessage } from '../APImessage';
import { map, pluck } from 'rxjs/operators';

@Injectable()
export class TeamService {

  constructor(
    private http: HttpClient
  ) { }

  getTeams(): Observable<Array<Team>> {
    return of([
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
    ]);
  }

  getHttpDogs(): Observable<string> {
    return this.http
      .get<APImessage>('http://dog.ceo/api/breeds/list')
      .pipe(
        pluck('message')
      );
  }
}
