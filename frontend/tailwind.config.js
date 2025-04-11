const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files in the src directory
    "./index.html", // Include the index.html file
    "./node_modules/@heroui/theme/dist/components/(input|form).js",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        "purple-dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        "light-red": {
          extend: "light", // <- inherit default values from light theme
          colors: {
            background: "#F7F7F7",
            foreground: "#000000",
            primary: {
              50: '#ffe7e6',
              100: '#f7c0bd',
              200: '#ec9894',
              300: '#e26f6a',
              400: '#d84740',
              500: '#bf2e27',
              600: '#95231d',
              700: '#6b1814',
              800: '#430c0a',
              900: '#1d0100',
              DEFAULT: "#F44336",
              foreground: "#ffffff",
            },
            secondary: {
              50: '#e3f2fd',
              100: '#bbdefb',
              200: '#90caf9',
              300: '#64b5f6',
              400: '#42a5f5',
              500: '#2196f3',
              600: '#1e88e5',
              700: '#1976d2',
              800: '#1565c0',
              900: '#0d47a1',
              DEFAULT: "#2196F3",
              foreground: "#ffffff",
            },
            focus: "#FF4081",
          },
        }
      },
    }),
  ],
};