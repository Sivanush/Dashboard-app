import { Component, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ChartComponent,
  NgApexchartsModule,
  ApexMarkers,
  ApexFill,
  ApexStroke,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  markers: ApexMarkers;
  fill:ApexFill
  stroke:ApexStroke
};

@Component({
  selector: 'app-sales-by-region',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './sales-by-region.component.html',
  styleUrl: './sales-by-region.component.css'
})
export class SalesByRegionComponent {

  @ViewChild("salesByRegionChart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
     this.chartOptions = {
          series: [
            {
              name: "Series 1",
              data: [2201, 2865, 1762, 1591,1749,2475]
            },
            
          ],
          chart: {
            height: 250,
            type: "radar",
            toolbar:{
              show:false
            },
          },
          markers: {
            size: 0
          },
          fill:{
            colors:['#64A2FF52']
          },
          xaxis: {
            categories: ["Asia", "Europe", "Americans", "Africa", "Middle Est", "Pacific"]
          }
        };
  }
}
