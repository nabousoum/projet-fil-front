import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ss-form-menu',
  templateUrl: './form-menu.component.html',
  styleUrls: ['./form-menu.component.css']
})
export class FormMenuComponent implements OnInit {

  panleExpanded = true;
  panleExpanded2 = true;
  panleExpanded3 = true;



  constructor() { }

  ngOnInit(): void {
  }

}
