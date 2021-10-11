import React from 'react'
import styled from 'styled-components'
import Card from 'components/Card'
import { Text } from '../../uikit'

const FollowDiv = styled(Card)`
  background: #1E215C;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  width: 320px;
  height: 434px;
  margin-top: 24px;
  padding: 15px 17px 0px 17px
`
const TwitterImage = styled.img`
  margin-top: 19px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
`

export function FollowTwitter() {
  return (
    <FollowDiv padding="24px">
      <Text color="#A0B9FB" fontSize="18px" lineHeight="22px" bold>
        Follow us on twitter
      </Text>
      <Text color="#FCFCFC" fontSize="16px" lineHeight="24px" bold>
        @robustprotocol
      </Text>
      <TwitterImage src="/images/twitter.png" />
    </FollowDiv>
  )
}

export default FollowTwitter