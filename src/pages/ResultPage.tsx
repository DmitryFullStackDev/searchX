import React, { FC } from 'react'
import { Box } from '../elements'
import { Search } from '../components'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { content } from '../data/content'

type Props = {
  category: string
}

export const ResultPage: FC<Props> = ({ category }) => {
  const navigate = useNavigate()

  const aboutResult = content.filter(el => el.category === category)

  return (
    <Box direction={'column'} padding={'10px'}>
      <Box align={'center'} gap={'10px'}>
        <Box cursor={'pointer'} onClick={() => navigate('/')} lineHeight={'40px'} fontSize={'30px'}>
          SearchX
        </Box>
        <Search width={'800px'} />
      </Box>

      {aboutResult.map(item => (
        <Box key={item.name} margin={'30px 0 0 130px'}>
          <Box direction={'column'} width={'800px'}>
            <TextLink>{item.link}</TextLink>
            <ActualLink onClick={() => window.open(item.link)}>{item.name}</ActualLink>
            <DescriptionText>{item.excerpt}</DescriptionText>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

const TextLink = styled.div`
  color: #202124;
  margin-bottom: 7px;
  font-size: 14px;
  line-height: 14px;
  font-weight: normal;
`

const ActualLink = styled.a`
  background: #fff;
  border: none;
  outline: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  color: #1a0dab;

  :visited {
    color: #784ca4;
  }
`

const DescriptionText = styled.div`
  color: #4d5156;
  line-height: 1.58;
  margin-top: 0;
  font-size: 14px;
  font-weight: normal;
`
