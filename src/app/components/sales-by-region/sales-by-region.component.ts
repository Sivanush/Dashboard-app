import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';

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
  ApexTheme,
  ApexTooltip,
} from "ng-apexcharts";
import { DataService } from '../../service/data.service';
import { CountryT } from '../../interface/interface';
import { CommonModule } from '@angular/common';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  markers: ApexMarkers;
  fill:ApexFill
  stroke:ApexStroke,
  theme:ApexTheme,
  tooltip:ApexTooltip,
};

@Component({
  selector: 'app-sales-by-region',
  standalone: true,
  imports: [NgApexchartsModule,CommonModule],
  templateUrl: './sales-by-region.component.html',
  styleUrl: './sales-by-region.component.css'
})
export class SalesByRegionComponent {

  @ViewChild("salesByRegionChart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  chartData!:number[]

  @Input() darkTheme!:boolean
  @Input() country!:CountryT

  constructor(private dataService:DataService) {
    this.getData(),
    this.chartOptions = this.getChartOptions(this.darkTheme)
  }

  getChartOptions(isDarkMode: boolean): Partial<ChartOptions> {
      return {
        series: [
          {
            name: "Series 1",
            data: [...this.chartData]
          },
        ],
        chart: {
          height: 250,
            type: "radar",
            toolbar:{
              show:false
            },
          background: isDarkMode ? '#1F214A' : '#FFFFFF'
        },
        tooltip: {
          theme: isDarkMode ? 'dark' : 'light',
          fixed: {
            enabled: false,
            position: 'topRight',
            offsetX: 0,
            offsetY: 0,
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
        },
        theme: {
          mode: isDarkMode ? 'dark' : 'light'
        }
      };
    }


    ngOnChanges(changes: SimpleChanges): void {
          if (changes['darkTheme'] || changes['country']) {
            this.getData()
            this.checkDarkMode();
          }
        }
    
    
      checkDarkMode() {
        const isDarkMode = localStorage.getItem('theme') === 'dark'    
        this.chartOptions = this.getChartOptions(isDarkMode);
      }
      
      getData(){
        this.dataService.getSalesByRegion(this.country).subscribe({
          next:(data)=>{
            console.log(data);
            
            this.chartData = data
            this.checkDarkMode();
          }
        })
      }
    
      ngOnInit() {
        this.getData()
      }
}
