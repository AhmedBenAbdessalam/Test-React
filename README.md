# Test React

This project is a web application that displays a graph of data provided in the attached file. The graph allows users to filter by ID or code and aggregate by code, month, or year. Additionally, there is a highlight feature for values below 100.

## Installation

1. Clone the repository

```console
git clone https://github.com/AhmedBenAbdessalam/Test-React
```

2. Install dependencies

```console
npm install
```

3. Start the development server

```console
npm run dev
```

## Packages Used and Why

- **Vite**: Vite is a development server that is built on top of esbuild. It is used to develop the project.
- **Tailwind**: Tailwind is a CSS framework that provides a set of utility classes for styling. It is used to provide a consistent look and feel to the UI.
- **Lodash**: A JavaScript utility library that provides useful functions for working with arrays, numbers, objects, strings, and more. I used it specifically for the minBy function.
- **Recharts**: A charting library built on top of D3 that allows for easy creation of charts and graphs.
- **D3**: A JavaScript library for manipulating documents based on data. It is a dependency for Recharts.
- **Papaparse**: Papaparse is a library for parsing CSV files. It is used to read the data from the attached file and make it available for use in the project.
