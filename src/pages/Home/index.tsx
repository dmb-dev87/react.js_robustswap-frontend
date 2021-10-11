import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { AutoColumn, ColumnCenter } from 'components/Column'
import { AutoRow, RowFixed } from 'components/Row'
import { FarmsStaking } from './FarmsStaking'
import { BuyToken } from './BuyToken'
import { FollowTwitter } from './FollowTwitter'
import AppBody from '../AppBody'
import { CardBody, Heading, IconButton, Text, Flex, useModal } from '../../uikit'
import VolumnCard from './components/VolumnCard'
import RBSCard from './components/RBSCard'
import GroupTitle from './components/GroupTitle'
import FarmCard from './components/FarmCard'
import PoolCard from './components/PoolCard'
import SupplyCard from './components/SupplyCard'
import TransactionCard from './components/TransactionCard'
import WelcomeHeader from './components/WelcomeHeader'

export default function Home() {
  const theme = useContext(ThemeContext)
  return (
      <>
        <WelcomeHeader />
        <AutoRow gap="6px" justify="center">
          <AutoColumn gap="lg">
            <AutoColumn gap="md">
              <AutoRow>
                <GroupTitle title="RBS Overview" />
              </AutoRow>
              <AutoRow justify="space-between">
                <AutoColumn width="32%">
                  <VolumnCard title="Total Liquidity" value="$ 60,000,000"/>
                </AutoColumn>
                <AutoColumn width="32%">
                  <VolumnCard title="24H Volumn" value="$ 23,000,000"/>
                </AutoColumn>
                <AutoColumn width="32%">
                  <VolumnCard title="TVL" value="$ 140,000,000"/>
                </AutoColumn>
              </AutoRow>
              <AutoRow>
                <AutoColumn width="100%">
                  <RBSCard title="Total Liquidity" value="$92.24"/>
                </AutoColumn>
              </AutoRow>
            </AutoColumn>
            <AutoRow justify="space-between">
              <AutoColumn width="49%" gap="md">
                <AutoRow>
                  <GroupTitle title="Top Farms" />
                </AutoRow>
                <AutoRow>
                  <AutoColumn width="100%">
                    <FarmCard />
                  </AutoColumn>
                </AutoRow>
              </AutoColumn>
              <AutoColumn width="49%" gap="md">
                <AutoRow>
                  <GroupTitle title="Top Pools" />
                </AutoRow>
                <AutoRow>
                  <AutoColumn width="100%">
                    <PoolCard />
                  </AutoColumn>
                </AutoRow>
              </AutoColumn>
            </AutoRow>
            <AutoColumn gap="md">
              <AutoRow>
                <GroupTitle title="RBS Supply Stats" />
              </AutoRow>
              <AutoRow>
                <SupplyCard />
              </AutoRow>
            </AutoColumn>
            <AutoColumn gap="md">
              <AutoRow>
                <GroupTitle title="RBS Transaction Limits" />
              </AutoRow>
              <AutoRow>
                <TransactionCard />
              </AutoRow>
            </AutoColumn>
          </AutoColumn>
          <AutoColumn>
            <FarmsStaking 
              harvestRbs={0}
              walletRbs={0} />
            <BuyToken />
            <FollowTwitter />
          </AutoColumn>
        </AutoRow>
      </>
  )
}
