import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'

const Photo = ({ imageUrl }) => {
  return (
    <Image source={{uri: imageUrl}} style={styles.image}/>
  )
}

const styles = StyleSheet.create({
    image: {
      height: '100%',
      width: '100%',
      marginTop: 10,
      borderRadius: 10
    }
  });

export default Photo;