import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { AutoColumn, ColumnCenter } from "components/Column"
import { AutoRow, RowBetween, RowFixed, RowFlat } from 'components/Row'
import GridLayout from 'uikit/components/Layouts/CardsLayout'
import RBSBNBIcon from './icons/RBSBNBIcon'
import RBTBNBIcon from './icons/RBTBNBIcon'
import AppBody from '../../AppBody'
import { CardBody, Heading, IconButton, Text, Card} from '../../../uikit'

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
            <Text color={theme.colors.primaryDark}>Sell Tax</Text>
            <Text>10%</Text>
          </StyledColumnCell>
          <StyledBoderLeft />
            <StyledColumnCell>
              <Text color={theme.colors.primaryDark}>Buy Tax</Text>
              <Text>5%</Text>
            </StyledColumnCell>
        </StyledRow>
        <StyledBoderBottom />
        <StyledRow>
          <StyledColumnCell>
            <Text color={theme.colors.primaryDark}>Transfer Tax</Text>
            <Text>10%</Text>
          </StyledColumnCell>
          <StyledBoderLeft />
            <StyledColumnCell>
              <Text color={theme.colors.primaryDark}>Amount Limit</Text>
              <Text>10 RBS</Text>
            </StyledColumnCell>
        </StyledRow>
      </CardBody>
    </Card>
  )
}