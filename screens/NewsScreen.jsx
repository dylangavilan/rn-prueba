import React, { useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../app/newsReducer';
import HistoricalCard from '../components/newspapers/Card';
import { getNewsState } from '../app/newsReducer';
import Loading from '../components/Loading';

export default function NewsScreen() {
  const { data, status } = useSelector((state) => getNewsState(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (status === 'loading') {
    return <Loading />
  }

  if (status === 'success') {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <HistoricalCard key={index} logData={item} />
          )}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 16,
  },
});
