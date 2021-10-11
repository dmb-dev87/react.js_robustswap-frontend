import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { AutoColumn, ColumnCenter } from "components/Column"
import { AutoRow, RowBetween, RowFixed, RowFlat } from 'components/Row'
import GridLayout from 'uikit/components/Layouts/CardsLayout'
import RBSBNBIcon from './icons/RBSBNBIcon'
import RBTBNBIcon from './icons/RBTBNBIcon'
import AppBody from '../../AppBody'
import { Card, CardBody, Heading, IconButton, Text, } from '../../../uikit'

const StyledBoderLeft = styled.div`
  margin-top: -24px;
  margin-bottom: -24px;
  border-left: 1px solid ${({ theme }) => theme.colors.deviderColor};
  padding-left: 10px;
  margin-left: 10px;
`

const StyledBoderBottom = styled.div`
  margin-left: -24px;
  margin-right: -24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.deviderColor};
  padding-bottom: 20px;
  margin-bottom: 20px;
`

const StyledColumnCell = styled.div`
  width: 290px;
  display: flex;
  justify-content: space-between;
`

const StyledRow = styled.div`
  width: 600px;
  display: flex;
  justify-constent: space-between;
  border-bottom: 1px ${({ theme }) => theme.colors.deviderColor};
`

export default function SupplyCard(props) {
  const { title, value } = props
  const theme = useContext(ThemeContext)

  return (
    <Card>
      <CardBody>
        <StyledRow>
          <StyledColumnCell>
            <Text color={theme.colors.primaryDark}>Maximum</Text>
            <Text>1000,000</Text>
          </StyledColumnCell>
          <StyledBoderLeft />
            <StyledColumnCell>
              <Text color={theme.colors.primaryDark}>Minted</Text>
              <Text>20,000</Text>
            </StyledColumnCell>
        </StyledRow>
        <StyledBoderBottom />
        <StyledRow>
          <StyledColumnCell>
            <Text color={theme.colors.primaryDark}>Locked Rewards</Text>
            <Text>500</Text>
          </StyledColumnCell>
          <StyledBoderLeft />
            <StyledColumnCell>
              <Text color={theme.colors.primaryDark}>Circulation</Text>
              <Text>12,000</Text>
            </StyledColumnCell>
        </StyledRow>
        <StyledBoderBottom />
        <StyledRow>
          <StyledColumnCell>
            <Text color={theme.colors.primaryDark}>Emission per block</Text>
            <Text>0.1</Text>
          </StyledColumnCell>
          <StyledBoderLeft />
            <StyledColumnCell>
              <Text color={theme.colors.primaryDark}>Burned</Text>
              <Text>15</Text>
            </StyledColumnCell>
        </StyledRow>
      </CardBody>
    </Card>
  )
}