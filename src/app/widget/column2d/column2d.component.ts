import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column2d',
  templateUrl: './column2d.component.html',
  styleUrls: ['./column2d.component.scss']
})
export class Column2dComponent implements OnInit {

  @Input() dataSource: any;

  constructor() { }

  ngOnInit() {
  }

}
