import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gauge-linear',
  templateUrl: './gauge-linear.component.html',
  styleUrls: ['./gauge-linear.component.scss']
})
export class GaugeLinearComponent implements OnInit {

  @Input() dataSource: any;

  constructor() { }

  ngOnInit() {
  }

}
