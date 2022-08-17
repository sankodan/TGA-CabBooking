import React, { useState } from 'react'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import { SafeAreaView, View } from 'react-native'
import { Logo, Paragraph, Header } from '@sankodan/com.cabbooking.components'
const BookingHistoryScreen = ({ navigation }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const handleTabIndexSelection = (index) => {
    setSelectedTabIndex(index)
  }

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <SegmentedControlTab
          values={['Tickets', 'Events']}
          selectedIndex={selectedTabIndex}
          onTabPress={handleTabIndexSelection}
          borderRadius={0}
          tabsContainerStyle={{
            height: 50,
            backgroundColor: '#c92a2a'
          }}
          tabStyle={{
            backgroundColor: '#ced4da',
            borderWidth: 0,
            borderColor: 'transparent'
          }}
          activeTabStyle={{ backgroundColor: '#495057', marginTop: 3 }}
          tabTextStyle={{ color: '#495057', fontWeight: 'bold' }}
          activeTabTextStyle={{ color: '#ced4da' }}
        />
        {selectedTabIndex === 0 && (
          <View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20
              }}
            >
              <Logo />
              <Header>Unable to find your booking?</Header>
            </View>
            <Paragraph>
              Make sure you are logged in with the correct details
            </Paragraph>
          </View>
        )}
        {selectedTabIndex === 1 && (
          <View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20
            }}
          >
            <Logo />
            <Header>Thank you for visiting, we are still working on it</Header>
          </View>
          <Paragraph>
            Stay tuned will update you once back.
          </Paragraph>
        </View>
        )}
      </SafeAreaView>
    </View>
  )
}

export default BookingHistoryScreen
