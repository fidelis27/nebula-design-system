import React from 'react'
import { Separator, Grid } from '@chakra-ui/react'

const Divider: React.FC = () => {
  return (
    <Grid
      gridTemplateColumns="1fr 1fr"
      columnGap={12}
      opacity={0.4}
    >
      <Separator marginY={6} />
      <Separator marginY={6} />
    </Grid>
  )
}

export default Divider
