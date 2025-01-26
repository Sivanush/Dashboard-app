export interface ApplicationData {
  name: string;
  profit: number;
  rate: number;
}

export interface IntegrationDataI {
  country: string;
  applications: ApplicationData[];
}





export interface RegisteredUserDataI {
  premiumUsers: number;
  basicUsers: number;
}


export type CountryT = 'India' | 'USA' | 'Germany' | 'UK' | 'Australia';


export interface CountryDataI {
  totalIncome: number;
  profit: number;
  totalViews: number;
  conversionRate: number;
  incomeChange: number;
  profitChange: number;
  viewsChange: number;
  conversionChange: number;
}
