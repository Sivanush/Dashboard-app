
# SellerApp Frontend Dashboard

This is a responsive dashboard built using **Angular** that dynamically loads country-specific data. It includes several visualizations, interactive components, and features such as country switching, light/dark mode toggle, and more. The project demonstrates the use of Angular, ApexCharts, Chart.js, Tailwind CSS.

## Features
- **Dashboard Layout**:
  - Sidebar with navigation options.
  - Top bar with the title "Dashboard", a country switcher dropdown, and a user profile icon.
  - Main content area displaying various components.
  
- **Country Switcher**:
  - A dropdown to select a country (USA, Canada, Germany, India).
  - Dynamically updates the dashboard data to reflect the selected country's stats.

- **Stat Cards**:
  - Display metrics such as Total Income, Profit, Total Views, and Conversion Rate.
  - Percentage change compared to the previous month.

- **Sales Overview Graph**:
  - A line chart showing Total Revenue and Total Target trends over time.
  - Tooltip displaying exact values on hover.

- **Sales by Region**:
  - A radar chart showing sales performance for different regions (Asia, Europe, Pacific, etc.).

- **Registered Users**:
  - Displays the total number of registered users (Premium vs Basic users).
  - Uses a circular progress bar to show distribution.

- **List of Integrations**:
  - A table displaying applications (e.g., Stripe, Shopify) with their type, rate progress, and profit values.

- **Bonus Features**:
  - Light/Dark mode toggle.
  - Local storage persistence for selected country.
  - Loading spinner and skeleton loading for data fetching.

## Technologies Used
- **Angular**: Framework for building the application.
- **Tailwind CSS**: For styling and responsive design.
- **ApexCharts/Chart.js**: For creating visualizations (line chart, radar chart).
- **LocalStorage**: For saving user preferences (selected country).

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/Dashboard-app.git
   ```

2. Navigate into the project directory:

   ```bash
   cd dashboard-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   ng serve
   ```

5. Open your browser and go to `http://localhost:4200` to view the dashboard.

## Deployment

The application is deployed using **Vercel**. You can access the live demo here:

[Live Demo](https://seller-app-chi.vercel.app/)

## Contributing

Feel free to fork this project and submit pull requests. Please ensure that your code adheres to the project's style guidelines and includes tests where necessary.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thank you to the maintainers of **ApexCharts**, **Chart.js** for their excellent libraries.
