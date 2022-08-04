import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  drawer: boolean = true;

  ngOnInit(): void {
  }

  drawerEvent($event: any) {
    this.drawer = $event;
  }

}
