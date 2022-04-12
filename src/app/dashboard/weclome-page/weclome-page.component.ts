import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weclome-page',
  templateUrl: './weclome-page.component.html',
  styleUrls: ['./weclome-page.component.scss']
})
export class WeclomePageComponent implements OnInit {

  constructor() { }

  img1 = '../assets/images/paris.jpg';
  ngOnInit(): void {
  }

}
