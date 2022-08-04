import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu.model';
import { SidebarcontrolService } from 'src/app/services/sidebarcontrol.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav')
  public sidenav!: MatSidenav;

  constructor(private sideNavService: SidebarcontrolService, private route: Router) {}

  menu: Menu = [
    {
      title: 'Home',
      icon: 'home',
      link: '/',
      color: '#F58227',
      active: 'active',
    },
    {
      title: 'Meus dados',
      icon: 'person_pin',
      link: '/profile',
      color: '#F58227',
      active: '',
    },
  ];

  active = false;

  showFiller = false;

  

  ngOnInit() {
    this.sideNavService.sideNavToggleSubject.subscribe(() => {
      this.sidenav.toggle();
    });
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['/login']);
  }
}
