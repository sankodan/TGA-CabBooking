import React from 'react'
import {
  Background,
  Logo,
  Paragraph
} from '@sankodan/com.cabbooking.components'
import { View } from 'react-native'
const AboutUsScreen = ({ navigation }) => {
  return (
    <Background disableProp={true}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10
        }}
      >
        <Logo />
      </View>
      <Paragraph>
        Publicis Sapient is an American digital consulting company, founded as
        Sapient in Cambridge, Massachusetts in 1990 by Jerry Greenberg and J.
        Stuart Moore. On February 6, 2015, Sapient became a fully owned division
        of French advertising giant Publicis, in a deal valued at $3.7bn
      </Paragraph>
      <Paragraph>
        At Publicis Sapient, we help companies and the public sector keep up
        with the pace of technological, societal and cultural change—all while
        meeting the ever-evolving demands and expectations of their customers.
        How? By elevating customer experiences, modernizing organizations and
        unlocking value through technology and data. By setting bold but
        achievable visions for digital transformation, we empower our business
        partners with true speed and agility.
      </Paragraph>
    </Background>
  )
}

export default AboutUsScreen
