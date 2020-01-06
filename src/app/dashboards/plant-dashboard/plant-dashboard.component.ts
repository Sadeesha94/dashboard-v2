import { Component, OnInit } from '@angular/core';
import { SideMenuItemsService } from 'src/app/services/side-menu-items.service';

@Component({
  selector: 'app-plant-dashboard',
  templateUrl: './plant-dashboard.component.html',
  styleUrls: ['./plant-dashboard.component.scss']
})
export class PlantDashboardComponent implements OnInit {

  dataItem: any = [];
  dataSource: object;

  constructor(private dataService: SideMenuItemsService) {
    this.dataSource = {
      chart: {
        caption: "Countries With Most Oil Reserves [2017-18]",
        subCaption: "In MMbbl = One Million barrels",
        xAxisName: "Country",
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "K",
        theme: "fusion",
        bgColor: "#293946",
        bgAlpha: "100",
        labelFontColor: "#fff",
        captionFontColor: "#fff"
      },
        data: this.dataItem.chart-data
    };
  }

  ngOnInit() {
    this.dataService.getJson("plant-chrt-data").subscribe(data => {
      this.dataItem = data;

    });
  }

}
