import { ChangeDetectorRef, Component, HostListener, Input, SimpleChanges, ViewChild } from '@angular/core';

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
  ApexTooltip,
  ApexTheme
} from "ng-apexcharts";
import { DataService } from '../../service/data.service';
import { CountryT } from '../../interface/interface';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip:ApexTooltip,
  theme:ApexTheme
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

  @Input() darkTheme!:boolean
  @Input() country!:CountryT

  totalRevenue!:number[]
  totalTarget!:number[]

  constructor(private dataService:DataService) {
    this.getData()
    this.chartOptions = this.getChartOptions(this.darkTheme);
  }




  getChartOptions(isDarkMode: boolean): Partial<ChartOptions> {
    return {
      series: [
        {
          name: "Total Revenue",
          data: [...this.totalRevenue],
          color: '#696FFB'
        },
        {
          name: 'Total Target',
          data: [...this.totalTarget],
          color: '#FF9E2B'
        }
      ],
      chart: {
        height: 250,
        type: "line",
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        },
        background: isDarkMode ? '#1F214A' : '#FFFFFF'
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
        theme: isDarkMode ? 'dark' : 'light',
        fixed: {
          enabled: false,
          position: 'topRight',
          offsetX: 0,
          offsetY: 0,
        },
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
    this.dataService.getSalesOverviewData(this.country).subscribe({
      next:(data)=>{
        this.totalRevenue = data.revenue
        this.totalTarget = data.target
        this.checkDarkMode();
      }
    })
  }

  ngOnInit() {
    this.getData()
  }

  

}
