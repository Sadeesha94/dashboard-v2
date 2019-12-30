import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dcs-dashboard',
  templateUrl: './dcs-dashboard.component.html',
  styleUrls: ['./dcs-dashboard.component.scss']
})
export class DcsDashboardComponent implements OnInit {

  @Input() titleText: string = "N/A";
  @Input() content: Component;

  constructor() { }

  ngOnInit() {
  }

}
