import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { SalesByRegionComponent } from "../sales-by-region/sales-by-region.component";
import { SalesOverviewComponent } from "../sales-overview/sales-overview.component";
import { ListOfIntegrationsComponent } from "../list-of-integrations/list-of-integrations.component";
import { RegisteredUserComponent } from "../registered-user/registered-user.component";
import { DataService } from '../../service/data.service';
import { CountryT } from '../../interface/interface';
import { FormsModule } from '@angular/forms';

Chart.register(...registerables);




@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SalesByRegionComponent, SalesOverviewComponent, ListOfIntegrationsComponent, RegisteredUserComponent, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  selectedCountry: CountryT = 'India';

  isDarkTheme: boolean = false
  isSidebarToggle = false


  constructor(private dataService:DataService) {}

  ngOnInit() {

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      this.isDarkTheme = true 
    }
    this.isDarkTheme = false 
    
    const currentCountry = localStorage.getItem('country');
    if (currentCountry) {
      console.log(currentCountry +111);
      
      this.selectedCountry = currentCountry  as CountryT
    }



  }

  onCountryChange(event: Event) {
    const target = event.target as HTMLSelectElement; 
    this.selectedCountry = target.value as CountryT    
    localStorage.setItem('country',this.selectedCountry)
  }

  

  initSalesOverviewChart() {
    const ctx = document.getElementById('salesOverviewChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Apr 2023', 'May 2023', 'Jun 2023', 'Jul 2023', 'Aug 2023', 'Sep 2023', 'Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024'],
        datasets: [{
          label: 'Total Revenue',
          data: [65, 59, 80, 81, 56, 55, 40, 60, 55, 30],
          borderColor: 'rgb(99, 102, 241)',
          tension: 0.4
        },
        {
          label: 'Total Target',
          data: [45, 70, 60, 90, 50, 45, 35, 50, 40, 35],
          borderColor: 'rgb(147, 51, 234)',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }





  toggleDarkMode() {
    const htmlElement = document.documentElement;
    const isDarkMode = htmlElement.classList.contains('dark');

    if (isDarkMode) {
      localStorage.setItem('theme', 'light');
      this.isDarkTheme = false
    } else {
      localStorage.setItem('theme', 'dark');
      this.isDarkTheme = true
    }
    htmlElement.classList.toggle('dark');
  }


  toggleSideBar(){
    this.isSidebarToggle = !this.isSidebarToggle
  }
}
