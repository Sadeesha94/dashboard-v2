import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar3d',
  templateUrl: './bar3d.component.html',
  styleUrls: ['./bar3d.component.scss']
})
export class Bar3dComponent implements OnInit {

  @Input() dataSource: any;

  constructor() { }

  ngOnInit() {
  }

}
