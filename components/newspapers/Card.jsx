// HistoricalCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const HistoricalCard = ({ logData }) => {
  const { lccn, state, title, url } = logData;

  const openUrl = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={openUrl} style={styles.card}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>{`State: ${state}`}</Text>
        <Text style={styles.info}>{`LCCN: ${lccn}`}</Text>
      </View>
    </TouchableOpacity>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: '#555',
  },
});

export default HistoricalCard;
