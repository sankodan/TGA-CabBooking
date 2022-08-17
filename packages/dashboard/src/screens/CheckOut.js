import React, { } from 'react'
import { Background, Paragraph, Avatar } from '@sankodan/com.cabbooking.components'
import { View } from 'react-native'

export default function CheckOut (props) {
  return (
    <Background>
      {(props && props.route && props.route.params && props.route.params.item)
        ? (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
              <Avatar style={{ flex: 1 }} url={props.route.params.item.image} />
              <Paragraph style={{
                flex: 1,
                fontSize: 15,
                lineHeight: 32
              }}>{props.route.params.item.text}</Paragraph>
            </View>
          )
        : null}

    </Background>
  )
}
