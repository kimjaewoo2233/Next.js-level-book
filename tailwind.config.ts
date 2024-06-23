import type { Config } from "tailwindcss";
import colors, { violet } from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        gray: colors.slate,
        'gray-1000': colors.white,
        'gray-1100': colors.gray[100],

        vercel: {
          pink: "#FF0080",
          blue: "#d3e5ff",
          cyan: "#50e3c2",
          orange: "#F5A623",
          violet: "#7928CA"
        }
      },

      keyframes: ({ theme }) => ({
        rerender: {
          '0%': {
            ["border-color"]: theme('colors.vercel.pink'),
          },
          '40%': {
            ['border-color']: theme('colors.vercel.pink')
          },
        },
        highlight: {
          '0%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white')
          },
          '40%': {
            background: theme('colors.vercel.pink'),
            color: theme('colors.white')
          }
        },
        loading: {
          '0%': {
            opacity: '.2',
          },
          '20%': {
            opacity: '1',
            transform: 'translateX(1px)',
          },
          to: {
            opacity: '.2',
          }
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)'
          }
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)',
          },
        },
        fadeToTransparent: {
          '0%': {
            opacity: '1',
          },
          '40%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0'
          }
        }
      })
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
export default config;
