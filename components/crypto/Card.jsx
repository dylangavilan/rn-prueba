// CryptoCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CryptoCard = ({ cryptoData }) => {
  const {
    symbol,

    lowPrice,
    highPrice,
    at,
  } = cryptoData;

  // Puedes personalizar los estilos según tus preferencias
  return (
    <View style={styles.card}>
      <Text style={styles.symbol}>{symbol}</Text>
      <Text>{`Low Price: ${lowPrice}`}</Text>
      <Text>{`High Price: ${highPrice}`}</Text>
      <Text>{`Timestamp: ${new Date(at).toLocaleString()}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
  },
  symbol: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default CryptoCard;
