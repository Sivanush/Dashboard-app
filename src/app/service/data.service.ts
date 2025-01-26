import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountryT, IntegrationDataI, RegisteredUserDataI } from '../interface/interface';




@Injectable({
  providedIn: 'root'
})
export class DataService {


  getIntegrationData(country:string): Observable<IntegrationDataI> {
    const data: IntegrationDataI[] = [
      {
        country: 'India',
        applications: [
          {
            name: 'Stripe',
            profit: 3000000,  
            rate: 72.5,       
          },
          {
            name: 'Zapier',
            profit: 2500000,  
            rate: 80.0,       
          },
          {
            name: 'Shopify',
            profit: 4376521,  
            rate: 65.2,       
          }
        ]
      },
      {
        country: 'USA',
        applications: [
          {
            name: 'Stripe',
            profit: 5000000,  
            rate: 85.5,       
          },
          {
            name: 'Zapier',
            profit: 4000000,  
            rate: 88.2,       
          },
          {
            name: 'Shopify',
            profit: 3347890,  
            rate: 75.1,       
          }
        ]
      },
      {
        country: 'Germany',
        applications: [
          {
            name: 'Stripe',
            profit: 2000000,  
            rate: 60.5,       
          },
          {
            name: 'Zapier',
            profit: 1800000,  
            rate: 70.0,       
          },
          {
            name: 'Shopify',
            profit: 1958910,  
            rate: 72.2,       
          }
        ]
      },
      {
        country: 'UK',
        applications: [
          {
            name: 'Stripe',
            profit: 2500000,  
            rate: 78.0,       
          },
          {
            name: 'Zapier',
            profit: 2200000,  
            rate: 83.3,       
          },
          {
            name: 'Shopify',
            profit: 3107654,  
            rate: 67.1,       
          }
        ]
      },
      {
        country: 'Australia',
        applications: [
          {
            name: 'Stripe',
            profit: 1500000,  
            rate: 90.0,       
          },
          {
            name: 'Zapier',
            profit: 1200000,  
            rate: 89.5,       
          },
          {
            name: 'Shopify',
            profit: 1874321,  
            rate: 72.8,       
          }
        ]
      },
    ];

    const countryData = data.find(item => item.country.toLowerCase() === country.toLowerCase());

    return of(countryData as IntegrationDataI) ;

  }


  getRegisteredUserData(country: CountryT): Observable<RegisteredUserDataI> {
    const countryUserData = {
      'India': { premiumUsers: 3000, basicUsers: 2500 },
      'USA': { premiumUsers: 3500, basicUsers: 2000 },
      'Germany': { premiumUsers: 2500, basicUsers: 1500 },
      'UK': { premiumUsers: 2800, basicUsers: 2200 },
      'Australia': { premiumUsers: 1800, basicUsers: 2000 }
    };
    console.log(country);
    
    const countryData = countryUserData[country];
    if (countryData) {
      return of(countryData);
    } else {
      return of({ premiumUsers: 0, basicUsers: 0 });
    }
  }
  
}
