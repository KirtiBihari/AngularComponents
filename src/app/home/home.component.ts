import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideNavComponent } from '../sidenav/sidenav.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private router: Router) {

  }
  ngOnInit() {

  }
}
