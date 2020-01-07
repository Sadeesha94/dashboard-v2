import { Component, OnInit, Input } from '@angular/core';
import { SideMenuItemsService } from 'src/app/services/side-menu-items.service';

@Component({
  selector: 'app-plant-dashboard',
  templateUrl: './plant-dashboard.component.html',
  styleUrls: ['./plant-dashboard.component.scss']
})
export class PlantDashboardComponent implements OnInit {


  @Input() dataSource: any = {
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
            data: []
            };

  constructor(private dataService: SideMenuItemsService) {
     this.dataService.getJson("plant-chart-data").subscribe(chartData => {
       this.dataSource.data = chartData.chart_data;
      });
  }

  ngOnInit() {
  }

}
