import { Component, OnInit, Input } from '@angular/core';
import { SideMenuItemsService } from 'src/app/services/side-menu-items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plant-dashboard',
  templateUrl: './plant-dashboard.component.html',
  styleUrls: ['./plant-dashboard.component.scss']
})
export class PlantDashboardComponent implements OnInit {

  plantName: string;

  cop: any = {
    chart: {

      numbersuffix: "[kWh/RTH]",
      gaugefillmix: "{dark-40},{light+70},{dark-40}",
      theme: "fusion",
      bgColor: "#293946",
      baseFontColor: "#fff",
      toolTipColor: "#000",
      majorTMColor: "#000",
      majorTMAlpha: "100",
      placeTicksInside: true,
      dashed: true,
      dashLen: "10"

      // pointerRadius: "10",
      // pointerBgColor: "#fff",
      // pointerSides: "2",
      // pointerBorderThickness: "10",
      // pointerBorderColor: "#000",
      // showPointerShadow: true
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
          //"displayValue": "Overall"
        }
      ]
    }
  }
  ;

  plantTotal: any = {
    chart: {
      caption: "Plant Total",
      subcaption: "Peak-  Off-Peak",
      xaxisname: "Item",
      yaxisname: "Value [RTH]",
      formatnumberscale: "1",
      plottooltext:
        "<b>$dataValue</b> $label consume in <b>$seriesName</b>",
      theme: "fusion",
      drawcrossline: "1",
      bgColor: "#293946",
      baseFontColor: "#fff",
      labelFontColor: "#fff",
      captionFontColor: "#fff",
      toolTipColor: "#000"
    },
    categories: [
      {
        category: [
          {
            label: "Total Production Energy"
          },
          {
            label: "Total Used Energy"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "Peak Time",
        data: [
          {
            value: "2056"
          },
          {
            value: "40663"
          }
        ]
      },
      {
        seriesname: "Off-Peak Time",
        data: [
          {
            value: "49602.30"
          },
          {
            value: "14344"
          }
        ]
      },
      {
        seriesname: "Total",
        data: [
          {
            value: "51658.30"
          },
          {
            value: "55007"
          }
        ]
      }
    ]
  };

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
