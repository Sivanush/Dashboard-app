import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountryDataI, CountryT, IntegrationDataI, RegisteredUserDataI } from '../interface/interface';




@Injectable({
  providedIn: 'root'
})
export class DataService {


  getIntegrationData(country: string): Observable<IntegrationDataI> {
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

    return of(countryData as IntegrationDataI);

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



  getSalesOverviewData(country: CountryT): Observable<{ revenue: number[], target: number[] }> {

    const countryData = {
      'India': {
        revenue: [5000, 7000, 9000, 10000, 11000, 10500, 12500, 13000, 14000, 14500],
        target: [5500, 7500, 9500, 11000, 11500, 12000, 13000, 14000, 15000, 16000]
      },
      'USA': {
        revenue: [12000, 13500, 14000, 15000, 16000, 15500, 17000, 17500, 18000, 19000],
        target: [12500, 14000, 15000, 15500, 16000, 16500, 17500, 18500, 19000, 20000]
      },
      'Germany': {
        revenue: [7000, 8000, 8500, 9500, 10000, 11500, 12000, 12500, 13000, 13500],
        target: [7500, 8500, 9500, 10500, 11000, 11500, 12500, 13500, 14000, 15000]
      },
      'UK': {
        revenue: [6500, 7500, 8000, 8500, 9000, 9500, 10000, 11000, 11500, 12000],
        target: [7000, 8000, 9000, 9500, 10000, 11000, 12000, 12500, 13000, 13500]
      },
      'Australia': {
        revenue: [4500, 6000, 7000, 8000, 8500, 9000, 9500, 10000, 11000, 12000],
        target: [5000, 6500, 7500, 8500, 9000, 9500, 10500, 11000, 12000, 12500]
      }
    };
    const data = countryData[country];
    return of(data ? data : { revenue: [], target: [] });
  }

  getSalesByRegion(region: CountryT): Observable<number[]> {
    const regionSalesData = {
      'India': [5000, 7000, 9000, 10000, 11000, 10500],
      'USA': [12000, 13500, 14000, 15000, 16000, 15500],
      'Germany': [7000, 8000, 8500, 9500, 10000, 11500],
      'UK': [6500, 7500, 8000, 8500, 9000, 9500],
      'Australia': [4500, 6000, 7000, 8000, 8500, 9000]
    };



    const data = regionSalesData[region];

    if (data) {
      return of(data);
    } else {
      return of([]);
    }
  }


  getMainCountryData(country: CountryT): Observable<CountryDataI> {
    const countryData = {
      'India': { totalIncome: 33328.12, profit: 8583.09, totalViews: 52234.32, conversionRate: 6.12, incomeChange: 3.65, profitChange: -2.65, viewsChange: 5.65, conversionChange: 8.45 },
      'USA': { totalIncome: 54000.15, profit: 10500.23, totalViews: 60000.45, conversionRate: 8.45, incomeChange: 2.75, profitChange: -1.15, viewsChange: 4.30, conversionChange: 6.75 },
      'Germany': { totalIncome: 44000.58, profit: 8200.15, totalViews: 49000.67, conversionRate: 5.85, incomeChange: 1.45, profitChange: -0.45, viewsChange: 6.25, conversionChange: 7.20 },
      'UK': { totalIncome: 38000.95, profit: 7500.99, totalViews: 51000.88, conversionRate: 7.55, incomeChange: 4.10, profitChange: -3.20, viewsChange: 4.75, conversionChange: 5.50 },
      'Australia': { totalIncome: 29000.33, profit: 6100.89, totalViews: 46000.34, conversionRate: 6.10, incomeChange: 3.90, profitChange: -1.00, viewsChange: 5.50, conversionChange: 8.10 }
    };

    const data = countryData[country];

    if (data) {
      return of(data);
    } else {
      return of({
        totalIncome: 0,
        profit: 0,
        totalViews: 0,
        conversionRate: 0,
        incomeChange: 0,
        profitChange: 0,
        viewsChange: 0,
        conversionChange: 0
      });
    }
  }

}
