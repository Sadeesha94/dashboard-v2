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

  databulb1: any = {
    chart: {
      caption: "COP1",
      upperlimit: "0",
      lowerlimit: "25",
      usecolornameasvalue: "1",
      placevaluesinside: "1",
      valuefontsize: "20",
      plottooltext: "$value[kWh/RTH]",
      theme: "fusion",
      bgColor: "#293946",
      toolTipColor: "#000",
      baseFontColor: "#fff",
      // "showvalue": "1",
      // "useColorNameAsValue": "1",
      // "placeValuesInside": "1",
      // "valueFontSize": "16",

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
    value: "0.573"
  };

  databulb2: any = {
    chart: {
      caption: "COP2",
      upperlimit: "0",
      lowerlimit: "25",
      usecolornameasvalue: "1",
      placevaluesinside: "1",
      valuefontsize: "20",
      plottooltext: "$value[kWh/RTH]",
      theme: "fusion",
      bgColor: "#293946",
      toolTipColor: "#000",
      baseFontColor: "#fff"
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
          label: "Overloaded",
          code: "#F54526"
        }
      ]
    },
    value: "1.1"
  };

  databulb3: any = {
    chart: {
      caption: "COP3",
      upperlimit: "0",
      lowerlimit: "25",
      usecolornameasvalue: "1",
      placevaluesinside: "1",
      valuefontsize: "20",
      plottooltext: "$value[kWh/RTH]",
      theme: "fusion",
      bgColor: "#293946",
      toolTipColor: "#000",
      baseFontColor: "#fff"
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
    value: "0.71"
  };

  databulb4: any = {
    chart: {
      caption: "COP4",
      upperlimit: "0",
      lowerlimit: "25",
      usecolornameasvalue: "1",
      placevaluesinside: "1",
      valuefontsize: "20",
      plottooltext: "$value[kWh/RTH]",
      theme: "fusion",
      bgColor: "#293946",
      toolTipColor: "#000",
      baseFontColor: "#fff"
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
    value: "0.9"
  };

  databulb5: any = {
    chart: {
      caption: "COP5",
      upperlimit: "0",
      lowerlimit: "25",
      usecolornameasvalue: "1",
      placevaluesinside: "1",
      valuefontsize: "20",
      plottooltext: "$value[kWh/RTH]",
      theme: "fusion",
      bgColor: "#293946",
      toolTipColor: "#000",
      baseFontColor: "#fff"
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
    value: "0.743"
  };


  cop1: any = {
    chart: {

      numbersuffix: "[kWh/RTH]",
      gaugefillmix: "{dark-40},{light+70},{dark-40}",
      theme: "fusion",
      bgColor: "#293946",
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
      bgColor: "#293946",
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
      bgColor: "#293946",
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
      bgColor: "#293946",
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
      bgColor: "#293946",
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
              caption: "Cooling Tower Electricity Usage",
              subCaption: "",
              xAxisName: "Cooling Tower",
              yAxisName: "Electricity [kWh]",
              numberSuffix: "kWh",
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
