import { Component, Input, SimpleChanges } from '@angular/core';
import { CurrencyFormatPipe } from '../../pipe/currency-format.pipe';
import { ApplicationData, IntegrationDataI } from '../../interface/interface';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-list-of-integrations',
  standalone: true,
  imports: [CurrencyFormatPipe],
  templateUrl: './list-of-integrations.component.html',
  styleUrl: './list-of-integrations.component.css'
})
export class ListOfIntegrationsComponent {

  stripe!: ApplicationData;
  zapier!: ApplicationData;
  shopify!: ApplicationData;
  @Input() country: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getIntegrationData();
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['country']) {
      this.getIntegrationData();
    }
  }

  getIntegrationData() {
    this.dataService.getIntegrationData(this.country).subscribe({
      next: (data: IntegrationDataI) => {
        
        const applications = data.applications as ApplicationData[]; 
  
        this.stripe = applications.find((app) => app.name === 'Stripe')!;
        this.zapier = applications.find((app) => app.name === 'Zapier')!;
        this.shopify = applications.find((app) => app.name === 'Shopify')!;
      },
      error: (err) => {
        console.error('Error ', err);
      },
    });
  }
  

}
