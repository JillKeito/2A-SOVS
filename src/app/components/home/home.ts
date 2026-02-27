import { Component } from '@angular/core';
import { Topbar } from './topbar/topbar';
import { Sidenav } from './sidenav/sidenav';

@Component({
  selector: 'app-home',
  imports: [Topbar, Sidenav],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
