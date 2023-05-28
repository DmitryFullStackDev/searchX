import React from 'react'
import { Box } from '../elements'
import { Search } from '../components'

export const Home = () => (
  <Box direction={'column'} align={'center'} justify={'center'} height={'90vh'} gap={'15px'}>
    <Box lineHeight={'80px'} fontSize={'70px'}>
      SearchX
    </Box>
    <Search width={'500px'} isButton={true} />
  </Box>
)
