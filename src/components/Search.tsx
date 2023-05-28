import React, { FC, useEffect, useRef, useState } from 'react'
import { Box } from '../elements'
import styled from 'styled-components'
import { PredictionItem } from './PredictionItem'
import { useTypedSelector } from '../hooks'
import { useNavigate } from 'react-router-dom'

type Props = {
  isButton?: boolean
  width: string
}

export const Search: FC<Props> = ({ isButton, width }) => {
  const categories = useTypedSelector(state => state.predictions)

  const navigate = useNavigate()

  const [value, setValue] = useState<string>('')
  const [isPredictionBox, setIsPredictionBox] = useState<boolean>(false)
  const [predictions, setPredictions] = useState<string[]>(categories)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = e => {
    const string = e.target.value
    setValue(string)

    const result = categories.filter(str => str.toLowerCase().indexOf(string.toLowerCase()) >= 0).slice(0, 5)
    setPredictions(result)
  }

  const startSearch = () => {
    const entity = categories.find(el => el === value)
    if (entity) {
      navigate('/' + entity)
    } else {
      navigate('/empty')
    }
    setIsPredictionBox(false)
  }

  const handleInputKeyDown = event => {
    if (event.key === 'Enter') {
      startSearch()
    }
  }

  const handlePredictionClick = () => {
    setIsPredictionBox(false)
    inputRef.current.blur()
  }

  useEffect(() => {
    setPredictions(categories)
  }, [categories])

  return (
    <Box direction={'column'} width={width} align={'center'} gap={'30px'}>
      <Box width={'100%'}>
        <Input
          ref={inputRef}
          onKeyDown={handleInputKeyDown}
          isPredictionBox={isPredictionBox}
          onBlur={() => setIsPredictionBox(false)}
          onFocus={() => setIsPredictionBox(true)}
          value={value}
          onChange={handleInputChange}
        />
        {Boolean(value) && <ButtonCross onClick={() => setValue('')}>x</ButtonCross>}
        {isPredictionBox && (
          <Box
            zIndex={1}
            onMouseDown={e => e.preventDefault()}
            direction={'column'}
            background={'white'}
            borderRadius={'0 0 30px 30px'}
            borderTop={'none'}
            border={'1px solid #eee'}
            top={'48px'}
            left={'0'}
            position={'absolute'}
            width={'100%'}
            align={'center'}
          >
            {predictions.map(item => (
              <PredictionItem handleClick={handlePredictionClick} key={item} item={item} />
            ))}

            <Button onClick={startSearch} margin={'20px 0'}>
              Search
            </Button>
          </Box>
        )}
      </Box>
      {isButton && <Button onClick={startSearch}>Search</Button>}
    </Box>
  )
}

const Input: any = styled.input`
  display: block;
  height: 46px;
  margin: auto;
  padding: 0 40px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: ${({ isPredictionBox }: any) => (isPredictionBox ? '15px 15px 0 0' : '15px')};
  outline: none;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  text-align: left;
  text-overflow: ellipsis;
  line-height: 36px;
  -webkit-appearance: none;
  width: 100%;
`

const Button: any = styled.button`
  border: 1px solid transparent;
  outline: none;
  border-radius: 3px;
  padding: 10px 15px;
  font-size: 15px;
  background: #f8f9fa;
  color: #555;
  cursor: pointer;
  width: 100px;
  margin: ${({ margin }: any) => margin};
`

const ButtonCross = styled.button`
  color: #777;
  font-size: 20px;
  position: absolute;

  cursor: pointer;
  width: 30px;
  height: 30px;
  background: none;
  outline: none;
  border: none;
  right: 5px;
  top: 8px;
`
