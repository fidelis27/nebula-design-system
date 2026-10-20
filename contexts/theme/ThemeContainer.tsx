import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'

import system from '../../styles/theme'

const ThemeContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" forcedTheme="dark" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default ThemeContainer
