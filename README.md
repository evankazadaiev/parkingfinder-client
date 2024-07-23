# Parking Finder Berlin MVP

Parking Finder Berlin is a Progressive Web App (PWA) designed to help users find parking spots in Berlin. The application works offline and caches parking data for seamless usage.

<p>
  <img src="https://github.com/user-attachments/assets/ac553dd8-c7fa-4ec5-990c-95db1cbff233" width="250px" />
  <img src="https://github.com/user-attachments/assets/ae774137-0817-4691-8aec-bd8f9f4a0ee0" width="250px" />
</p>

## Demo. Make sure to start backend server first.
1. [Front-end demo](https://pacific-cove-71889-f44426dfeaf4.herokuapp.com/).
2. [Back-end server](https://sleepy-basin-25742-c216d1d4896e.herokuapp.com/).

## Features

- **Interactive Map**: Uses Leaflet to display a map of Berlin with markers indicating available parking spots.
- **Interactive Data Grid**: Click on the location to center the map directly to the address
- **Make directions using your favourite Navigator App**: Allows user to make directions in Google Maps, Apple Maps or Waze
- **Data Grid**: Displays detailed information about parking spots (free or paid, amenities and more!)
- **Offline Support**: The app works offline and caches parking spots using service workers
- **Responsive Design**: Compatible with various screens and devices

## Installation

The instructions below will help you set up the development environment:

 ### Cloning repository

   ```bash
   git clone https://github.com/evankazadaiev/parkingfinder-client.git
   cd parkingfinder-client
   ```
### Installing dependencies
```bash
  npm install
```
 ### Creating .env
  ```bash
  touch .env
  VITE_APP_API_URL=http://localhost:3000
  ```
### 3. Running development server
```bash
npm run dev
```
