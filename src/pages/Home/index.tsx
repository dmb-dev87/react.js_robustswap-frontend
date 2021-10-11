import React from 'react'
import { FarmsStaking } from './FarmsStaking'
import { BuyToken } from './BuyToken'
import { FollowTwitter } from './FollowTwitter'

export default function Home() {

  // fetch the user's balances of all tracked V2 LP tokens
  return (
    <>
      <FarmsStaking 
        harvestRbs={0}
        walletRbs={0} />
      <BuyToken />
      <FollowTwitter />
    </>
  )
}
