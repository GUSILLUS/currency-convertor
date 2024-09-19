
# Currency Converter

## Description

This project is a simple currency converter that displays current exchange rates and allows conversion between different currencies. The header shows the current exchange rates for USD and EUR relative to the Ukrainian Hryvnia (UAH), updating every second.

## Features

- Displays the current exchange rates for USD and EUR relative to UAH.
- Conversion between three currencies: UAH, USD, EUR.
- Two separate fields for entering values and selecting currencies (input + select) for each currency.
- Automatic conversion when the value in a field or the selected currency changes.
- Header updates the currency rates every second using a public API.
- Bidirectional conversion: changing one currency automatically recalculates the other.

## Tech Stack

- **React**
- **TypeScript**
- **React Query** for API data fetching and caching.
- **date-fns** for date formatting.
- **CSS/Tailwind CSS** for styling (or add your preferred styling method).

## Installation and Setup

### Steps to Run the Project:

1. Clone this repository:

   ```bash
   git clone <repo-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd currency-converter
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the project in development mode:

   ```bash
   npm run dev
   ```

5. Open the application in your browser:

   ```bash
   http://localhost:3000
   ```

### Build for Production:

To build the project for production, run:

```bash
npm run build
```

## Project Structure

```bash
├── public
│   └── assets
│       └── reverse.png   # Image for the component
├── src
│   ├── assets        # Application assets
│   └── shared
│      ├── components        # Application components
│      ├── hooks             # Custom hooks
│      ├── services          # API services
│      ├── types             # Type declarations
│   ├── App.tsx           # Main component
│   └── index.tsx         # Entry point
└── tsconfig.json         # TypeScript configuration
```

### Currency Conversion

Conversion happens in both directions — changing a value in one field or selecting a currency updates the corresponding value in the other field automatically.

## Absolute Imports Configuration

To use absolute imports in the project, `tsconfig.json` is configured as follows:

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "*": [
        "*"
      ]
    },
  }
}
```

## Requirements

- Node.js 18.x or newer
- NPM or Yarn
