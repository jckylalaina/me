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
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({themes: {
    dark: {
  "colors": {
    "background": {
      "DEFAULT": "#030538",
      "foreground": "#f5f6ff"
    },
    "content1": "#010328",
    "content2": "#020541",
    "content3": "#02075a",
    "content4": "#03097c",
    "danger": {
      "50": "#400c0c",
      "100": "#891a1a",
      "200": "#c92626",
      "300": "#e26565",
      "400": "#eda1a1",
      "500": "#f0b2b2",
      "600": "#f4c3c3",
      "700": "#f8d8d8",
      "800": "#fceeee",
      "900": "#fdf6f6",
      "DEFAULT": "#FF5252"
    },
    "default": {
      "50": "#262626",
      "100": "#525252",
      "200": "#787878",
      "300": "#a3a3a3",
      "400": "#c7c7c7",
      "500": "#d1d1d1",
      "600": "#dbdbdb",
      "700": "#e8e8e8",
      "800": "#f5f5f5",
      "900": "#fafafa",
      "DEFAULT": "#787878",
      "foreground": "#fafafa"
    },
    "divider": "#4c55fa",
    "focus": "#030538",
    "foreground": {
      "50": "#262626",
      "100": "#525252",
      "200": "#787878",
      "300": "#a3a3a3",
      "400": "#c7c7c7",
      "500": "#d1d1d1",
      "600": "#dbdbdb",
      "700": "#e8e8e8",
      "800": "#f5f5f5",
      "900": "#fafafa",
      "DEFAULT": "#FFFFFF",
      "foreground": "#262626"
    },
    "overlay": "#030538",
    "primary": {
      "50": "#02064b",
      "100": "#040c9f",
      "200": "#0611ea",
      "300": "#4c55fa",
      "400": "#9297fc",
      "500": "#a5aafd",
      "600": "#b9bdfd",
      "700": "#d2d4fe",
      "800": "#ebecfe",
      "900": "#f5f6ff",
      "DEFAULT": "#030538"
    },
    "secondary": {
      "50": "#262626",
      "100": "#525252",
      "200": "#787878",
      "300": "#a3a3a3",
      "400": "#c7c7c7",
      "500": "#d1d1d1",
      "600": "#dbdbdb",
      "700": "#e8e8e8",
      "800": "#f5f5f5",
      "900": "#fafafa",
      "DEFAULT": "#9E9E9E"
    },
    "success": {
      "50": "#103c12",
      "100": "#238026",
      "200": "#34bc38",
      "300": "#6fd872",
      "400": "#a7e7a9",
      "500": "#b7ebb9",
      "600": "#c7f0c8",
      "700": "#dbf5dc",
      "800": "#effbef",
      "900": "#f7fdf7",
      "DEFAULT": "#4CB04F"
    },
    "warning": {
      "50": "#4b3901",
      "100": "#a17902",
      "200": "#ecb204",
      "300": "#fcd04a",
      "400": "#fde290",
      "500": "#fee7a5",
      "600": "#feedb9",
      "700": "#fef3d2",
      "800": "#fffaeb",
      "900": "#fffcf5",
      "DEFAULT": "#FFC108"
    }
  },
  "extend": "dark"
}
  }})],
}
export default config
