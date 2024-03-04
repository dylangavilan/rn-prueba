import React, { useEffect } from 'react'
import { StyleSheet, Text, FlatList, View } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'

import { fetchCrypto, getCryptoState } from '../app/crypto'

import CryptoCard from '../components/crypto/Card'
import Loading from '../components/Loading'

export default function CryptoScreen() {
  const { data, status } = useSelector((state) => getCryptoState(state))
  const dispatch = useDispatch()
  
  const renderCryptoCard = ({ item }) => <CryptoCard cryptoData={item} />;
  
  useEffect(() => {
    dispatch(fetchCrypto())
  }, [])

  if(status === 'loading'){
    return <Loading />
  }

  return (
    <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCryptoCard}
          contentContainerStyle={styles.container}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      paddingVertical: 16,
    },
});