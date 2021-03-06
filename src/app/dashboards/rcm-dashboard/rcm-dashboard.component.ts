import { Component, OnInit, Input } from '@angular/core';
import { SideMenuItemsService } from 'src/app/services/side-menu-items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rcm-dashboard',
  templateUrl: './rcm-dashboard.component.html',
  styleUrls: ['./rcm-dashboard.component.scss']
})
export class RcmDashboardComponent implements OnInit {

  @Input() titleText: string = "N/A";
  @Input() content: Component;

  plantName = "biopolis";

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
      bgColor: "#000000",
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
      caption: "Cooling Tower Electricity Usage",
      subCaption: "",
      xAxisName: "Cooling Tower",
      yAxisName: "Electricity [kWh]",
      numberSuffix: "kWh",
      theme: "fusion",
      bgColor: "#000000",
      bgAlpha: "100",
      labelFontColor: "#fff",
      captionFontColor: "#fff"
    },
    data: []
  };

  cop1: any = {
    chart: {

      numbersuffix: "[kWh/RTH]",
      gaugefillmix: "{dark-40},{light+70},{dark-40}",
      theme: "fusion",
      bgColor: "#000000",
      baseFontColor: "#fff",
      toolTipColor: "#000",
      majorTMColor: "#fff",
      majorTMAlpha: "100",
      placeTicksInside: false,
      dashed: true,
      dashLen: "15",

      pointerRadius: "10",
      pointerBgColor: "#fff",
      pointerSides: "2",
      pointerBorderThickness: "10",
      pointerBorderColor: "#000",
      showPointerShadow: true
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
          value: "0.573",
          //"displayValue": "Overall"
        }
      ]
    }
  }
    ;

  cop2: any = {
    chart: {

      numbersuffix: "[kWh/RTH]",
      gaugefillmix: "{dark-40},{light+70},{dark-40}",
      theme: "fusion",
      bgColor: "#000000",
      baseFontColor: "#fff",
      toolTipColor: "#000",
      majorTMColor: "#fff",
      majorTMAlpha: "100",
      placeTicksInside: false,
      dashed: true,
      dashLen: "15",

      pointerRadius: "10",
      pointerBgColor: "#fff",
      pointerSides: "2",
      pointerBorderThickness: "10",
      pointerBorderColor: "#000",
      showPointerShadow: true
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
          value: "0.652",
          //"displayValue": "Overall"
        }
      ]
    }
  }
    ;

  cop3: any = {
    chart: {

      numbersuffix: "[kWh/RTH]",
      gaugefillmix: "{dark-40},{light+70},{dark-40}",
      theme: "fusion",
      bgColor: "#000000",
      baseFontColor: "#fff",
      toolTipColor: "#000",
      majorTMColor: "#fff",
      majorTMAlpha: "100",
      placeTicksInside: false,
      dashed: true,
      dashLen: "15",

      pointerRadius: "10",
      pointerBgColor: "#fff",
      pointerSides: "2",
      pointerBorderThickness: "10",
      pointerBorderColor: "#000",
      showPointerShadow: true
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
          value: "0.500",
          //"displayValue": "Overall"
        }
      ]
    }
  }
    ;

  cop4: any = {
    chart: {

      numbersuffix: "[kWh/RTH]",
      gaugefillmix: "{dark-40},{light+70},{dark-40}",
      theme: "fusion",
      bgColor: "#000000",
      baseFontColor: "#fff",
      toolTipColor: "#000",
      majorTMColor: "#fff",
      majorTMAlpha: "100",
      placeTicksInside: false,
      dashed: true,
      dashLen: "15",

      pointerRadius: "10",
      pointerBgColor: "#fff",
      pointerSides: "2",
      pointerBorderThickness: "10",
      pointerBorderColor: "#000",
      showPointerShadow: true
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
          value: "0.699",
          //"displayValue": "Overall"
        }
      ]
    }
  }
    ;

  cop5: any = {
    chart: {

      numbersuffix: "[kWh/RTH]",
      gaugefillmix: "{dark-40},{light+70},{dark-40}",
      theme: "fusion",
      bgColor: "#000000",
      baseFontColor: "#fff",
      toolTipColor: "#000",
      majorTMColor: "#fff",
      majorTMAlpha: "100",
      placeTicksInside: false,
      dashed: true,
      dashLen: "15",

      pointerRadius: "10",
      pointerBgColor: "#fff",
      pointerSides: "2",
      pointerBorderThickness: "10",
      pointerBorderColor: "#000",
      showPointerShadow: true
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
          value: "0.743",
          //"displayValue": "Overall"
        }
      ]
    }
  }
    ;

  constructor(private dataService: SideMenuItemsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.dataService.getJson("plant-chart-data").subscribe(chartData => {
      this.dataSource.data = chartData[this.plantName];
      //console.log(chartData[this.plantName]);
    });
  }

}
