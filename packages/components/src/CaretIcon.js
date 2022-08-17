import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function CaretIcon () {
  return (
      <Image
        style={styles.image}
        source={require('../assets/caret_right.png')}
      />
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + 50,
    left: 4
  },
  image: {
    width: 20,
    height: 20
  }
})
