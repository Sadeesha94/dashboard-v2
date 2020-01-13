import { Component, OnInit, Input } from '@angular/core';
import { SideMenuItemsService } from 'src/app/services/side-menu-items.service';
import { ActivatedRoute } from '@angular/router';

const data = {

};

@Component({
  selector: 'app-plant-dashboard',
  templateUrl: './plant-dashboard.component.html',
  styleUrls: ['./plant-dashboard.component.scss']
})
export class PlantDashboardComponent implements OnInit {

  plantName: string;

  cop: any = {
    chart: {
      caption: "Chiller Plant COP",
      subcaption: "System COP",
      numbersuffix: "[kWh/RTH]",
      gaugefillmix: "{dark-00},{light+70},{dark-00}",
      theme: "fusion",
      bgColor: "#293946",
      baseFontColor: "#fff",
      toolTipColor: "#000"
    },
    colorrange: {
      color: [
        {
          minvalue: "0",
          maxvalue: "0.7",
          label: "Excellent",
          code: "#59A1D4"
        },
        {
          minvalue: "0.7",
          maxvalue: "0.85",
          label: "Good",
          code: "#43E62D"
        },
        {
          minvalue: "0.85",
          maxvalue: "1",
          label: "Fair",
          code: "#F5C926"
        },
        {
          minvalue: "1",
          maxvalue: "1.2",
          label: "Need Improvement",
          code: "#F54526"
        }
      ]
    },
    pointers: {
      pointer: [
        {
          value: "0.698",
          "displayValue": "Overall"
        }
      ]
    }
  }
  ;

  dataSource: any = {
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

  constructor(private dataService: SideMenuItemsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.plantName = params.get("plantName");
      this.getData();
    });
  }
  getData() {
    this.dataService.getJson("plant-chart-data").subscribe(chartData => {
      this.dataSource.data = chartData[this.plantName];
      //console.log(chartData[this.plantName]);
    });
  }

}
