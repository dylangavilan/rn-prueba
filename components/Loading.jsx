import { ActivityIndicator, StyleSheet, View } from 'react-native';
import React from 'react'

const Loading = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
         <ActivityIndicator size="large" color="blue" />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
  });
  