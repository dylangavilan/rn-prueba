import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header({ title }) {
  return (
      <Text style={styles.title}>{title}</Text>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: '700'
    }
})