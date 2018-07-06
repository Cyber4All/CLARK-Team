import { Component, HostListener } from '@angular/core';
import { TeamService } from './services/team.service';
import { Member } from 'environments/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modal = false;
  windowWidth: number;
  activeMember: Member;
  team: Member[];

  @HostListener('window:resize', ['$event']) handleResize(event) {
    this.windowWidth = event.target.innerWidth;
  }

  @HostListener('window:keyup', ['$event']) handleKeyup(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.modal = false;
    }
  }

  constructor(private teamService: TeamService) {

    // retrieve team from store;
    this.teamService.getTeam().then(team => {
      this.team = team;
    });
  }

  get isMobile(): boolean {
    return this.windowWidth < 750;
  }
}
