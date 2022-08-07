import React from 'react'
import { Snackbar } from 'react-native-paper'
import { StyleSheet, View, Text } from 'react-native'
import { theme } from '@sankodan/com.cabbooking.core'

export default function Toast ({ type = 'error', message, onDismiss, testID }) {
  return (
    <View testID = {testID}
    style={styles.container}>
      <Snackbar
        visible={!!message}
        duration={3000}
        onDismiss={onDismiss}
        style={{
          backgroundColor:
            type === 'error' ? theme.colors.error : theme.colors.success
        }}
      >
        <Text style={styles.content}>{message}</Text>
      </Snackbar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 80 + 100,
    width: '100%'
  },
  content: {
    fontWeight: '500'
  }
})
