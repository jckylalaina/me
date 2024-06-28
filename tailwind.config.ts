import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react';
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontSize:{
        "big": "74px"
      },
      screens:{
        '4xl': '1900px',
        'h-xl': { 'raw': '(min-height: 1280px)' },
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({themes: {
    dark: {
  "colors": {
    "background": {
      "DEFAULT": "#011626",
      "foreground": "#012a4b"
    },
    "content1": "#d7edfe",
    "content2": "#bee1fe",
    "content3": "#a5d6fe",
    "content4": "#81c5fd",
    "danger": {
      "50": "#fdf6f6",
      "100": "#fceeee",
      "200": "#f8d8d8",
      "300": "#f4c3c3",
      "400": "#f0b2b2",
      "500": "#e88787",
      "600": "#e26565",
      "700": "#c92626",
      "800": "#891a1a",
      "900": "#400c0c",
      "DEFAULT": "#FF5252"
    },
    "default": {
      "50": "#fafafa",
      "100": "#f5f5f5",
      "200": "#e8e8e8",
      "300": "#dbdbdb",
      "400": "#d1d1d1",
      "500": "#b8b8b8",
      "600": "#a3a3a3",
      "700": "#787878",
      "800": "#525252",
      "900": "#262626",
      "DEFAULT": "#e8e8e8",
      "foreground": "#262626"
    },
    "divider": "#4aacfc",
    "focus": "#011626",
    "foreground": {
      "50": "#fafafa",
      "100": "#f5f5f5",
      "200": "#e8e8e8",
      "300": "#dbdbdb",
      "400": "#d1d1d1",
      "500": "#b8b8b8",
      "600": "#a3a3a3",
      "700": "#787878",
      "800": "#525252",
      "900": "#262626",
      "DEFAULT": "#FFFFFF",
      "foreground": "#fafafa"
    },
    "overlay": "#011626",
    "primary": {
      "50": "#f5faff",
      "100": "#ebf6ff",
      "200": "#d2eafe",
      "300": "#b9dffe",
      "400": "#a5d6fe",
      "500": "#72bffd",
      "600": "#4aacfc",
      "700": "#0483ec",
      "800": "#025aa1",
      "900": "#012a4b",
      "DEFAULT": "#011626"
    },
    "secondary": {
      "50": "#f9fafa",
      "100": "#f4f5f6",
      "200": "#e6e9eb",
      "300": "#d7dddf",
      "400": "#ccd3d6",
      "500": "#b0babf",
      "600": "#99a7ad",
      "700": "#6b7c85",
      "800": "#49555b",
      "900": "#22282a",
      "DEFAULT": "#AFBDC4"
    },
    "success": {
      "50": "#f5fff9",
      "100": "#ebfff3",
      "200": "#d1ffe4",
      "300": "#b8ffd5",
      "400": "#a3ffc9",
      "500": "#70ffac",
      "600": "#47ff94",
      "700": "#00f064",
      "800": "#00a344",
      "900": "#004d20",
      "DEFAULT": "#00C753"
    },
    "warning": {
      "50": "#fffcf5",
      "100": "#fffaeb",
      "200": "#fef3d2",
      "300": "#feedb9",
      "400": "#fee7a5",
      "500": "#fdda72",
      "600": "#fcd04a",
      "700": "#ecb204",
      "800": "#a17902",
      "900": "#4b3901",
      "DEFAULT": "#FFC108"
    }
  },
  "extend": "dark"
}
  }})],
}
export default config
