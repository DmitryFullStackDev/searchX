import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { removeItem } from '../store/slices'
import { useActions } from '../hooks'

type Props = {
  item: string
  handleClick: () => void
}

export const PredictionItem: FC<Props> = ({ item, handleClick }) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const a = useActions({ removeItem })

  const handleRemoveClick = e => {
    e.preventDefault()
    a.removeItem(item)
  }

  return (
    <Item
      to={'/' + item}
      onClick={handleClick}
      onMouseDown={e => e.preventDefault()}
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {item} {isActive && <ButtonRemove onClick={handleRemoveClick}>remove</ButtonRemove>}
    </Item>
  )
}

const Item = styled(Link)`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 10px 40px;
  background: #fff;
  border: none;
  outline: none;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  text-align: left;
  cursor: default;
  position: relative;
  text-decoration: none;

  :visited {
    color: #784ca4;
  }

  :hover {
    background: #eee;
  }
`

const ButtonRemove = styled.button`
  margin-right: 10px;
  font-size: 13px;
  color: rgb(85, 85, 85);
  border: 0px;
  outline: none;
  background: transparent;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 3px;
`
