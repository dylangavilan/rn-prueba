// JournalCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const JournalCard = ({ journalData }) => {
  const { title, publisher, ISSN, URL } = journalData;

  const openUrl = () => {
    Linking.openURL(URL);
  };

  return (
    <TouchableOpacity onPress={openUrl} style={styles.card}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>{`Publisher: ${publisher}`}</Text>
        <Text style={styles.info}>{`ISSN: ${ISSN}`}</Text>
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

export default JournalCard;
