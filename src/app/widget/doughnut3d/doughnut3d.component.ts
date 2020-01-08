import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doughnut3d',
  templateUrl: './doughnut3d.component.html',
  styleUrls: ['./doughnut3d.component.scss']
})
export class Doughnut3dComponent implements OnInit {

  @Input() dataSource: any;

  constructor() { }

  ngOnInit() {
  }

}
