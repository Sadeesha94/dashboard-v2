import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barchart3d',
  templateUrl: './barchart3d.component.html',
  styleUrls: ['./barchart3d.component.scss']
})
export class Barchart3dComponent implements OnInit {

  @Input() dataSource: any;

  constructor() { }

  ngOnInit() {
  }

}
