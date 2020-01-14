import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grouped-column3d',
  templateUrl: './grouped-column3d.component.html',
  styleUrls: ['./grouped-column3d.component.scss']
})
export class GroupedColumn3dComponent implements OnInit {

  @Input() dataSource: any;

  constructor() { }

  ngOnInit() {
  }

}
