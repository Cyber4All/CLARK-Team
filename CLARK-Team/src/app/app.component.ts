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
  modalDom = false;
  windowWidth: number;
  activeMember: Member;
  team: Member[];

  @HostListener('window:resize', ['$event']) handleResize(event) {
    this.windowWidth = event.target.innerWidth;

    if (this.modal && this.isMobile) {
      // window.scrollTo(0, 0);
    }
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

    // set window width
    this.windowWidth = window.innerWidth;
  }

  showModal(member: Member) {
    this.activeMember = member;
    this.modalDom = true;

    setTimeout(() => {
      this.modal = true;
    }, 100);

    if (this.isMobile) {
      window.scrollTo(0, 0);
    }
  }

  hideModal() {
    this.modal = false;

    setTimeout(() => {
      this.modalDom = false;
    }, 250);
  }

  get isMobile(): boolean {
    return this.windowWidth < 750;
  }
}
