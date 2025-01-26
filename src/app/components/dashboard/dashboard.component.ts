import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { SalesByRegionComponent } from "../sales-by-region/sales-by-region.component";
import { SalesOverviewComponent } from "../sales-overview/sales-overview.component";
import { ListOfIntegrationsComponent } from "../list-of-integrations/list-of-integrations.component";
import { RegisteredUserComponent } from "../registered-user/registered-user.component";
import { DataService } from '../../service/data.service';
import { CountryDataI, CountryT } from '../../interface/interface';
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
  countryData!:CountryDataI


  constructor(private dataService:DataService) {}

  ngOnInit() {

    this.getMainData()


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


  getMainData(){
    this.dataService.getMainCountryData(this.selectedCountry).subscribe({
      next:(data)=>{
        this.countryData = data
        console.log(this.countryData);
        
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  onCountryChange(event: Event) {
    const target = event.target as HTMLSelectElement; 
    this.selectedCountry = target.value as CountryT    
    localStorage.setItem('country',this.selectedCountry)
    this.getMainData()
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
