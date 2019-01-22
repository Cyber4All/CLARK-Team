import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member, Store } from 'environments/types';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  /**
   * Returns every member of the team
   */
  getTeam(): Promise<Member[]> {

    return this.http.get(environment.store, { responseType: 'json' }).toPromise().then((store: Store) => {
      return store.team;
    });
  }
}
