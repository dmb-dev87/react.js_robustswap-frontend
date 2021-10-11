import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Heading } from '../../../uikit'

export default function GroupTitle(props) {
  const { title, value } = props
  const theme = useContext(ThemeContext)

  return (
    <Heading mb="8px" color={theme.colors.primaryDark} size="lg">{title}</Heading>
  )
}