import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { AutoColumn, ColumnCenter } from "components/Column"
import { AutoRow, RowBetween, RowFixed } from 'components/Row'
import GridLayout from 'uikit/components/Layouts/CardsLayout'
import RBSBNBIcon from './icons/RBSBNBIcon'
import RBTBNBIcon from './icons/RBTBNBIcon'
import AppBody from '../../AppBody'
import { CardBody, Heading, IconButton, Text, Card} from '../../../uikit'

const StyledBnbLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
  margin-right: 8px;
`

export default function FarmCard(props) {
  const { title, value } = props

  return (
    <Card>
      <CardBody>
        <AutoColumn gap="20px">
          <RowBetween>
            <RowFixed>
              <RBSBNBIcon />
              <Text>RBS/BNB</Text>
            </RowFixed>
            <RowFixed>
              <Text>2,600 APY</Text>
            </RowFixed>
          </RowBetween>
          <RowBetween>
            <RowFixed>
              <RBTBNBIcon />
              <Text>RBS/BNB</Text>
            </RowFixed>
            <RowFixed>
              <Text>2,600 APY</Text>
            </RowFixed>
          </RowBetween>
        </AutoColumn>
      </CardBody>
    </Card>
  )
}