import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public activeButton = false;

  constructor() { }

  ngOnInit() {
    console.log(this.activeButton);
  }

  toggleButton() {
    !this.activeButton ? this.activeButton = true : this.activeButton = false;
  }

}
