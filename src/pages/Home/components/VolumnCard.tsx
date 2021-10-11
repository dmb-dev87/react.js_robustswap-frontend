import React, { useContext, useMemo } from 'react'
import { AutoColumn } from "components/Column"
import AppBody from '../../AppBody'
import { CardBody, Heading, IconButton, Text, Flex, useModal, Card } from '../../../uikit'

export default function VolumnCard(props) {
  const { title, value } = props

  return (
    <AutoColumn>
      <Card>
        <CardBody>
          <AutoColumn>
              <Text>
                {title}
              </Text>
          </AutoColumn>
          <Heading mb="8px">{value}</Heading>
        </CardBody>
      </Card>
    </AutoColumn>
  )
}