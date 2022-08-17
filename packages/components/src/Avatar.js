import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Avatar ({ url }) {
  return <Image source={{ url }} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 180,
    marginVertical: 8
  }
})
