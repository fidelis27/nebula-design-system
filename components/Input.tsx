import React from 'react'
import { Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'

const Input: React.FC<ChakraInputProps> = (props) => {
  return (
    <ChakraInput
      height="50px"
      backgroundColor="gray.800"
      borderRadius="sm"
      css={{ '--focus-color': 'colors.purple.500' }}
      {...props}
    />
  )
}

export default Input
