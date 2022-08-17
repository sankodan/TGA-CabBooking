import React from 'react'
import {
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView
} from 'react-native'
import {
  CaretIcon
} from '@sankodan/com.cabbooking.components'
import { theme } from '@sankodan/com.cabbooking.core'
const AccountScreen = ({ navigation }) => {
  const accountData = require('../data/account.json')

  const rowItem = (data) => {
    const { item } = data
    const legalInformationTitle = `${item.title}`
    const tileName = legalInformationTitle
    return (
      <TouchableOpacity
        onPress={() => onAccountItemClick()}
        testID={item.action}
        label={item.action}
      >
        <View style={styles.row}>
          <Text accessibilityLabel={tileName} testID={`${item.testID}`}>
            {tileName}
          </Text>
          <CaretIcon />
        </View>
      </TouchableOpacity>
    )
  }
  const onAccountItemClick = () => {
    navigation.navigate('AboutUsScreen')
  }

  const itemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
        style={{
          height: 0.75,
          width: '100%',
          backgroundColor: theme.colors.secondary
        }}
      />
    )
  }

  return (
      <SafeAreaView>
        <FlatList
          data={accountData.accountList}
          ItemSeparatorComponent={itemSeparatorView}
          renderItem={rowItem}
          keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 4
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary
  }
})

export default AccountScreen
