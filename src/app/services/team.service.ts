import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member, Store } from 'environments/types';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  /**
   * Returns every member of the team
   */
  getTeam(): Promise<Member[]> {
    return this.http.get('../../assets/store.json', { responseType: 'json' }).toPromise().then((store: Store) => {
      return store.team;
    });
  }

  /**
   * Returns a single team member
   * @param id id of the member to retrieve
   */
  getTeamMember(id: string): Promise<Member> {
    return this.http.get('../../assets/store.json', { responseType: 'json' }).toPromise().then((store: Store) => {
      return store.team.filter(s => s.id === id)[0];
    });
  }
}
