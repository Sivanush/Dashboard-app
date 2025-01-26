import { Component, Input, SimpleChanges } from '@angular/core';
import { DataService } from '../../service/data.service';
import { CountryT } from '../../interface/interface';
import { CurrencyFormatPipe } from '../../pipe/currency-format.pipe';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-registered-user',
  standalone: true,
  imports: [CurrencyFormatPipe],
  templateUrl: './registered-user.component.html',
  styleUrl: './registered-user.component.css'
})
export class RegisteredUserComponent {

  constructor(private dataService:DataService) {}

  @Input() country!: CountryT
  basicUserCount!:number
  PremiumUserCount!:number
  private chart: Chart | null = null; 
  

  ngOnInit(): void {
    this.getRegisteredUser()
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['country']) {
      this.getRegisteredUser();
    }
  }


  initRegisteredUsersChart() {
    const ctx = document.getElementById('registeredUsersChart') as HTMLCanvasElement;
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [this.PremiumUserCount, this.basicUserCount],
          backgroundColor: ['#696FFB', '#696FFB99'],
          circumference: 180,
          rotation: 270,
          borderColor: ['#696FFB', '#696FFB99'],  
          borderWidth: 2,   
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '80%'
      }
    });
  }

   


  getRegisteredUser(){
    this.dataService.getRegisteredUserData(this.country).subscribe({
      next:(data)=>{        
        this.PremiumUserCount = data.premiumUsers
        this.basicUserCount = data.basicUsers
        this.initRegisteredUsersChart()

      },
      error:(err)=>{
        console.error('Error ', err);
      }
    })
  }
}
