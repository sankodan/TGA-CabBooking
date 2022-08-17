import React from 'react'
import { ActivityIndicator } from 'react-native'
import auth from '@react-native-firebase/auth'
import { Background } from '@sankodan/com.cabbooking.components'
import { theme } from '@sankodan/com.cabbooking.core'

export default function AuthLoadingScreen ({ navigation }) {
  React.useEffect(() => {
    const onAuthStateChanged = (user) => {
      if (user) {
        // User is logged in
        navigation.reset({
          index: 0,
          routes: [{ name: 'TabNav' }]
        })
      } else {
        // User is not logged in
        navigation.reset({
          index: 0,
          routes: [{ name: 'StartScreen' }]
        })
      }
    }
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  )
}
