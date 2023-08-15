import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        bounce200: 'bounce 1s infinite 400ms',
        bounce400: 'bounce 1s infinite 800ms',
    },

    },
  },
  plugins: [],
}
export default config
