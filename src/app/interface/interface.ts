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
