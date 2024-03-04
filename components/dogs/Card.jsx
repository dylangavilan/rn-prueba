import { StyleSheet, View } from 'react-native'
import React from 'react'
import Photo from './Photo'
import Header from './Header'

export default function Card({ imageUrl, title }) {
  return (
    <View style={styles.container}>
      <Header title={title} />
      <Photo imageUrl={imageUrl} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        display: 'flex',
        direction: 'column',
        alignContent: 'center',
        alignItems: 'center',
    },
})