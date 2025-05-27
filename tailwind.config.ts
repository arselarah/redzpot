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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        redzpot: '#df002f',
        secondaryDark: '#1a1a1a'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      fontSize: {
        clamp_cover: 'clamp(2rem, 7vw, 4.5rem)',
        clamp_subtitles: 'clamp(1.2rem, 4vw, 1.8rem)',
        clamp_textoImportante: 'clamp(1.15rem, 2vw, 1.35rem)'
      }
    }
  },
  plugins: []
} satisfies Config
