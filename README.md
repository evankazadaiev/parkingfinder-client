# Parking Finder Berlin MVP

Parking Finder Berlin is a Progressive Web App (PWA) designed to help users find parking spots in Berlin. The application works offline and caches parking data for seamless usage.

<p>
  <img src="https://github.com/user-attachments/assets/ac553dd8-c7fa-4ec5-990c-95db1cbff233" width="250px" />
  <img src="https://github.com/user-attachments/assets/ae774137-0817-4691-8aec-bd8f9f4a0ee0" width="250px" />
</p>



## Features

- **Interactive Map**: Uses Leaflet to display a map of Berlin with markers indicating available parking spots.
- **Interactive Data Grid**: Click on the location to center the map directly to the address
- **Make directions using your favourite Navigator App**: Allows user to make directions in Google Maps, Apple Maps or Waze
- **Data Grid**: Displays detailed information about parking spots (free or paid, amenities and more!)
- **Offline Support**: The app works offline and caches parking spots using service workers
- **Responsive Design**: Mobile-first design ensures compatibility with various screen sizes.


## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/parking-finder-berlin.git
   cd parking-finder-berlin

   

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
