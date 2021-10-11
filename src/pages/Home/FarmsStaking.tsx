import React from 'react'
import styled from 'styled-components'
import Card from 'components/Card'
import { Button, Text } from 'uikit'
import { LogoCircleIcon } from 'uikit/components/Svg'
import { TYPE } from '../../components/Shared'

const { black: Black } = TYPE

const Logo = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
`

const RbsDiv = styled.div`
  margin-top: 24px;
  display: flex;
`

const StyledDiv = styled.div`
  width: 50%;
`

const GradientCard = styled(Card)`
  position:relative;
  background: linear-gradient(90.04deg, #0C0720 0.04%, #291A83 99.97%);
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  width: 320px;
  height: 320px;
  padding: 32px;
`

const RoundButton = styled(Button)`
  width: 266px;
  height: 56px;
  background: #5F47EE;
  border-radius: 28px;
  margin-top: 40px;
`

export function FarmsStaking({
  harvestRbs,
  walletRbs
}: {
  harvestRbs: 0
  walletRbs: 0
}) {
  return (
    <GradientCard>
      <Text color="#24c7d6" fontSize="34px" lineHeight="40px" bold>Farms & Staking</Text>
      <RbsDiv>
        <StyledDiv>
          <Text color="#E354FA" fontSize="12px" lineHeight="14px">RBS to Harvest</Text>        
          <Text color="#767676" fontSize="18px" lineHeight="22px">Loked</Text>
          <Text color="#FCFCFC" fontSize="12px" lineHeight="14px">~$0.00</Text>
        </StyledDiv>
        <StyledDiv>
          <Text color="#E354FA" fontSize="12px" lineHeight="14px">RBS to Wallet</Text>        
          <Text color="#767676" fontSize="18px" lineHeight="22px">Loked</Text>
          <Text color="#FCFCFC" fontSize="12px" lineHeight="14px">~$0.00</Text>
        </StyledDiv>
      </RbsDiv>
      <RoundButton>
        <Text color="#FCFCFC" fontSize="18px" lineHeight="24px" bold>UNLOCK WALLET</Text>
      </RoundButton>
      <Logo>
        <LogoCircleIcon />
      </Logo>
    </GradientCard>
  )
}

export default FarmsStaking