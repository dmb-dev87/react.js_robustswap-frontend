import React from 'react'
import styled from 'styled-components'
import Card from 'components/Card'
import { Button, Text } from '../../uikit'

const GradientCard = styled(Card)`
  background: linear-gradient(90.04deg, #0C0720 0.04%, #291A83 99.97%);
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  width: 320px;
  height: 280px;
  margin-top: 24px;
`

const RoundButton = styled(Button)`
  width: 266px;
  height: 56px;
  background: #5F47EE;
  border-radius: 28px;
`

export function BuyToken() {
  return (
    <GradientCard padding="24px">
      <Text style={{ textAlign: "center" }} color="#FCFCFC" fontSize="20px" lineHeight="24px" bold>
        Join the revloution with the Robust Protocol community
      </Text>      
      <RoundButton marginTop="32px" marginBottom="16px">
        <Text color="#FCFCFC" fontSize="18px" bold>BUY RBS</Text>
      </RoundButton>
      <RoundButton>
        <Text color="#FCFCFC" fontSize="18px" bold>BUY RBT</Text>
      </RoundButton>
    </GradientCard>
  )
}

export default BuyToken