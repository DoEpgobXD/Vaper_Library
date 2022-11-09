import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
elemnent:{type: string, name: string, content: string};
  constructor() { }

  ngOnInit(): void {
  }
}
