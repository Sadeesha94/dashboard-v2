import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-piechart3d',
  templateUrl: './piechart3d.component.html',
  styleUrls: ['./piechart3d.component.scss']
})
export class Piechart3dComponent implements OnInit {

  @Input() dataSource: any;

  constructor() { }

  ngOnInit() {
  }

}
