import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import GridLayout from 'uikit/components/Layouts/CardsLayout'
import { AutoColumn, ColumnCenter } from 'components/Column'
import { AutoRow, RowFixed } from 'components/Row'
import AppBody from '../AppBody'
import { CardBody, Heading, IconButton, Text, Flex, useModal } from '../../uikit'
import VolumnCard from './components/VolumnCard'
import RBSCard from './components/RBSCard'
import GroupTitle from './components/GroupTitle'
import FarmCard from './components/FarmCard'
import SupplyCard from './components/SupplyCard'
import TransactionCard from './components/TransactionCard'

export default function Home() {
  const theme = useContext(ThemeContext)

  return (
    <>
      <AutoColumn gap="30px">
        <AutoColumn gap="20px">
          <AutoRow>
            <GroupTitle title="RBS Overview" />
          </AutoRow>
          <AutoRow>
            <GridLayout>
              <VolumnCard title="Total Liquidity" value="$ 60,000,000"/>
              <VolumnCard title="24H Volumn" value="$ 23,000,000"/>
              <VolumnCard title="TVL" value="$ 140,000,000"/>
            </GridLayout>
          </AutoRow>
          <AutoRow >
            <AutoColumn>
              <RBSCard title="Total Liquidity" value="$92.24"/>
            </AutoColumn>
          </AutoRow>
        </AutoColumn>
        <AutoRow>
          <GridLayout>
            <AutoColumn gap="20px">
              <AutoRow>
                <GroupTitle title="Top Farms" />
              </AutoRow>
              <AutoRow>
                <FarmCard />
              </AutoRow>
            </AutoColumn>
            <AutoColumn gap="20px">
              <AutoRow>
                <GroupTitle title="Top Pools" />
              </AutoRow>
              <AutoRow>
                <FarmCard />
              </AutoRow>
            </AutoColumn>
          </GridLayout>
        </AutoRow>
        <AutoColumn gap="20px">
          <AutoRow>
            <GroupTitle title="RBS Supply Stats" />
          </AutoRow>
          <AutoRow>
            <SupplyCard />
          </AutoRow>
        </AutoColumn>
        <AutoColumn gap="20px">
          <AutoRow>
            <GroupTitle title="RBS Transaction Limits" />
          </AutoRow>
          <AutoRow>
            <TransactionCard />
          </AutoRow>
        </AutoColumn>
    </AutoColumn>
  </>
  )
}
