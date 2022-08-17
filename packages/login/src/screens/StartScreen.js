import React from 'react'
import { Background, Paragraph, Button, Header, Logo } from '@sankodan/com.cabbooking.components'

export default function StartScreen ({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header></Header>
      <Paragraph>The easiest way to start with your amazing movie booking application.
      </Paragraph>
      <Button
        testID = 'loginScreenButton'
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        testID = 'RegisterScreenButton'
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
