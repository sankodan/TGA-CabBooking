import React, { useEffect, useState } from 'react'
import { Background, Paragraph, Avatar, Button } from '@sankodan/com.cabbooking.components'
import { ActivityIndicator, FlatList, View } from 'react-native'
import apiManager from '@sankodan/com.cabbooking.core/src/api/axiosInstance'

export default function Dashboard (props) {
  const apiForMovies = 'https://api.npoint.io/f0263d463ab78b8b0c10'
  const [movies, setMovies] = useState([])
  /* istanbul ignore next  */
  useEffect(() => {
    apiManager
      .get(apiForMovies)
      .then((response) => {
        setMovies(response.data.movies)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <Background>
      {movies && movies.length > 0
        ? <FlatList
            style={{ width: '100%' }}
            data={movies}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <Avatar url={item.image} />
                  <Paragraph style={{
                    lineHeight: 16
                  }}>{item.text}</Paragraph>
                  <View style={{ flex: 1 }}>
                    <Button testID="bookButton" mode="outlined" onPress={() => props.navigation.navigate('CheckOut', { item })}>
                      Book Now
                    </Button>
                  </View>
                </View>
              )
            }}
            numColumns={2}
            showsVerticalScrollIndicator={false}
        />
        : <ActivityIndicator /> }
    </Background>
  )
}
