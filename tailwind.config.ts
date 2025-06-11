import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontSize: {
        'fluid-cover': 'clamp(2.5rem, 3vw + 1rem, 5.5rem)',
        'fluid-lg': 'clamp(1.5rem, 2vw + 1rem, 2.5rem)',
        'fluid-xl': 'clamp(2rem, 4vw, 3rem)',
        'fluid-sm': 'clamp(0.875rem, 1vw + 0.5rem, 1.125rem)',
        'fluid-md': 'clamp(1.05rem, 1vw + 1.5rem, 1.25rem)'
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
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
