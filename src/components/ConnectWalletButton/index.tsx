import React from 'react'
import { useWeb3React } from '@web3-react/core'
import useI18n from 'hooks/useI18n'
import { injected, walletconnect } from 'connectors'
import { Button, ButtonProps, ConnectorId, useWalletModal } from '../../uikit'

const UnlockButton: React.FC<ButtonProps> = props => {
  const TranslateString = useI18n()
  const { account, activate, deactivate } = useWeb3React()

  const handleLogin = (connectorId: ConnectorId) => {
    if (connectorId === 'walletconnect') {
      return activate(walletconnect)
    }
    return activate(injected)
  }

  const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate, account as string)

  return (
    <Button onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Connect')}
    </Button>
  )
}

export default UnlockButton
