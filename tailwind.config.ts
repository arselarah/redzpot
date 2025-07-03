import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        secondary_dark: '#1a1a1a',
        primary_red: '#df002f',
        gris: '#e0e0e0',
        claro: '#f3f3f3'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      fontSize: {
        clamp_cover: 'clamp(2rem, 7vw, 4.5rem)',
        clamp_subtitles: 'clamp(1.2rem, 4vw, 1.8rem)',
        clamp_textoImportante: 'clamp(1.15rem, 2vw, 1.35rem)',
        'fluid-cover': 'clamp(2.5rem, 3vw + 1rem, 5.5rem)',
        'fluid-lg': 'clamp(1.5rem, 2vw + 1rem, 2.5rem)',
        'fluid-xl': 'clamp(2rem, 4vw, 3rem)',
        'fluid-sm': 'clamp(0.875rem, 1vw + 0.5rem, 1.125rem)',
        'fluid-md': 'clamp(1.05rem, 1vw + 1.5rem, 1.25rem)',
        'fluid-titles': 'clamp(1.05rem, 1vw + 1.5rem, 1.25rem)'
      },
      height: {
        fluid: 'clamp(25rem, 60vh, 100rem)'
      }
    }
  },
  plugins: []
} satisfies Config
