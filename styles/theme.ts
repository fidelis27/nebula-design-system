import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  globalCss: {
    body: {
      bg: 'gray.800',
      color: 'white',
    },
  },
  theme: {
    tokens: {
      fonts: {
        body: { value: 'Roboto, system-ui, sans-serif' },
        heading: { value: 'Roboto, system-ui, sans-serif' },
        mono: { value: 'Menlo, monospace' },
      },
      fontWeights: {
        normal: { value: '400' },
        medium: { value: '600' },
        bold: { value: '700' },
      },
      radii: {
        sm: { value: '5px' },
        md: { value: '8px' },
      },
      colors: {
        purple: {
          500: { value: '#8257e5' },
        },
        gray: {
          300: { value: '#e1e1e6' },
          600: { value: '#29292e' },
          700: { value: '#202024' },
          800: { value: '#121214' },
        },
      },
    },
  },
})

const system = createSystem(defaultConfig, config)

export default system
