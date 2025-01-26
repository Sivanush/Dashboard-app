import { Component, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  NgApexchartsModule,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip:ApexTooltip
};

@Component({
  selector: 'app-sales-overview',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './sales-overview.component.html',
  styleUrl: './sales-overview.component.css'
})
export class SalesOverviewComponent {

  @ViewChild("salesOverviewChart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Total Revenue",
          data: [15, 19, 10, 11, 6, 5, 11, 6, 15, 13],
          color:'#696FFB'
        },
        {
          name:'Total Target',
          data:[15, 10, 20, 10, 10, 15, 5, 3, 4, 15],
          color:'#FF9E2B'
        }
      ],
      chart: {
        height: 250,
        type: "line",
        zoom: {
          enabled: false
        },
        toolbar:{
          show:false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], 
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
         'Apr 2023', 'May 2023', 'Jun 2023', 'Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024'
        ]
      },
      tooltip: {
        marker: {
          // enabled: true,
        },
        fixed: {
          enabled: false,
          position: 'topRight',
          offsetX: 0,
          offsetY: 0,
      },
      }
    };
  }
}
