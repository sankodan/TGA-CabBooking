import React from 'react'
import { Background, Logo, Header, Paragraph, Button } from '@sankodan/com.cabbooking.components'
import { logoutUser } from '@sankodan/com.cabbooking.core'

export default function Dashboard () {
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button testID = 'logoutButton' mode="outlined" onPress={logoutUser}>
        Logout
      </Button>
    </Background>
  )
}
