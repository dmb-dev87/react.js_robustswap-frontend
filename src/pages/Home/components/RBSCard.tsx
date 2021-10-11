import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import GridLayout from 'uikit/components/Layouts/CardsLayout'
import { AutoColumn, ColumnCenter } from "components/Column"
import { AutoRow, RowBetween, RowFixed, RowFlat } from 'components/Row'
import { Flex } from 'uikit/components/Flex'
import RBSIcon from './icons/RBSIcon'
import AppBody from '../../AppBody'
import { CardBody, Heading, IconButton, Text, Progress } from '../../../uikit'

const StyledBnbLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`

const StyledLeftDevider = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding-left: 30px;
`

const StyledRightMargin = styled.div`
  padding-right: 30px;
`

export default function RBSCard(props) {
  const { title, value } = props
  const theme = useContext(ThemeContext)

  return (
    <AppBody>
      <CardBody>
        <AutoColumn gap="30px">
          <AutoRow>
            <GridLayout>
              <RBSIcon />
              <AutoColumn>
                <Text>
                  RBS
                </Text>
                <AutoRow>
                  <GridLayout>
                    <Heading size="xl">{value}</Heading>
                    <Text color={theme.colors.success}>
                      +2.1%
                    </Text>
                  </GridLayout>
                </AutoRow>
              </AutoColumn>
            </GridLayout>
          </AutoRow>
          <RowFixed>
            <AutoColumn gap="10px">
              <StyledRightMargin>
                <AutoColumn gap="6px">
                  <RowFixed>
                    <Text color={theme.colors.textDetail} fontSize={theme.mediaQueries.sm}>24h Low / 24h high</Text>
                  </RowFixed>
                  <RowBetween>
                    <Text>$91.80</Text>
                    <Progress primaryStep={150} secondaryStep={300} showProgressBunny />
                    <Text>$98.68</Text>
                  </RowBetween>
                </AutoColumn>
              </StyledRightMargin>
            </AutoColumn>
            <AutoColumn >
              <StyledLeftDevider>
                <AutoColumn gap="6px">
                  <RowFixed>
                    <Text color={theme.colors.textDetail} fontSize={theme.mediaQueries.sm}>Market Cap</Text>
                  </RowFixed>
                  <RowFixed>
                    <Text>$1,241,33</Text>
                  </RowFixed>
                </AutoColumn>
              </StyledLeftDevider>
            </AutoColumn>
          </RowFixed>
        </AutoColumn>
      </CardBody>
    </AppBody>
  )
}