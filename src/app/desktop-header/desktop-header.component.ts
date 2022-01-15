import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrls: ['./desktop-header.component.scss']
})
export class DesktopHeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}