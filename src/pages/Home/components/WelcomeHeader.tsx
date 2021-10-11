import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import UnlockButton from 'components/ConnectWalletButton'
import { AutoRow, RowBetween } from 'components/Row'
import { AutoColumn } from 'components/Column'
import RBSBNBIcon from './icons/RBSBNBIcon'
import RBTBNBIcon from './icons/RBTBNBIcon'
import AppBody from '../../AppBody'
import { CardBody, Heading, IconButton, Text, } from '../../../uikit'

const HomeLogoImage = styled.div`
	position: relative;
  margin-bottom: 50px;
`
const HeadingTopBar = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  padding: 20px 30px;
`

const TopDevider = styled.div`
  margin-top: 2px;
  margin-bottom: 5px;
  border-left: 1px solid ${({ theme }) => theme.colors.valueDividerColor};
  padding-left: 14px;
  margin-left: 14px;
`

const RbsRbtCompare = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const TopHeading = styled.div`
 width: 45%;
 margin: 20px;
`

export default function FarmCard(props) {
  const { title, value } = props

  return (
    <HomeLogoImage>
      <img src="./images/home.png" alt=""/>
      <HeadingTopBar>
        <RbsRbtCompare>
          <AutoRow>
            <AutoColumn>
              <AutoRow>
                <Text>
                  RBS
                </Text>
              </AutoRow>
              <AutoRow>
                <Text>
                  $92.24
                </Text>
              </AutoRow>
            </AutoColumn>
            <TopDevider>
              <AutoColumn>
                <AutoRow>
                  <Text>
                    RBT
                  </Text>
                </AutoRow>
                <AutoRow>
                  <Text>
                    $35.98
                  </Text>
                </AutoRow>
              </AutoColumn>
            </TopDevider>
          </AutoRow>
          <UnlockButton size="sm"/>
        </RbsRbtCompare>
        <TopHeading>
          <AutoColumn>
            <Heading size="xxxl">Welcome to ROBUSTSWAP</Heading>
            <Text>
              A hyper-deflationary decentralized exchange with yield farming designed to optimize profitability.
            </Text>
          </AutoColumn>
        </TopHeading>
      </HeadingTopBar>
    </HomeLogoImage>
  )
}