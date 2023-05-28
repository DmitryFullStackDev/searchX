import React from 'react'
import { Box } from '../elements'
import { Search } from '../components'
import { useNavigate } from 'react-router-dom'

export const EmptyPage = () => {
  const navigate = useNavigate()

  return (
    <Box direction={'column'} padding={'10px'}>
      <Box align={'center'} gap={'10px'}>
        <Box cursor={'pointer'} onClick={() => navigate('/')} lineHeight={'40px'} fontSize={'30px'}>
          SearchX
        </Box>
        <Search width={'800px'} />
      </Box>

      <Box fontWeight={'normal'} margin={'30px 0 0 130px'}>
        No results containing all your search terms were found.
      </Box>
    </Box>
  )
}
