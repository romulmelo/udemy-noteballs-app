import defaultTheme from 'windicss/defaultTheme'
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  attributify: true,
  theme: {
    extend: {
      backgroundColor: {
        zinc: {
          900: '#18181B',
          800: '#27272A',
          700: '#3F3F46',
          600: '#71717A',
          500: '#88898F',
          400: '#A1A1AA',
          300: '#D4D4D8',
          200: '#EFEFEF',
          100: '#F8F8F8',
          50: '#FDFDFD'
        }
      },
      fontFamily: {
        sans: ['Inter', defaultTheme.fontFamily.sans]
      }
    }
  },
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git']
  },
  plugins: [
    require('windicss/plugin/filters'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/typography')
  ]
})
