import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarcontrolService } from 'src/app/services/sidebarcontrol.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private toggleService: SidebarcontrolService,
    private route: Router
  ) {}
  @Output() menuToggled = new EventEmitter<boolean>();

  drawer: boolean = true;

  userLogged = {
    name: '',
    email: '',
    firstName: '',
    image: '',
    lastName: ''
  }

  toggle() {
    this.drawer = !this.drawer;
    this.toggleService.toggle();
  }

  drawerEvent($event: any) {
    this.drawer = $event;
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['/login']);
  }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('data') || '{}');
    this.userLogged.name = user.name;
    this.userLogged.email = user.email;
    this.userLogged.firstName = user.firstName;
    this.userLogged.image = user.image;
  }
}
