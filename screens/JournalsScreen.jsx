import React, { useEffect } from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import { fetchJournals } from '../app/journals'
import { useDispatch, useSelector } from 'react-redux'
import { getJournalsState } from '../app/journals'
import JournalCard from '../components/journal/Card'
import Loading from '../components/Loading'

const JournalsScreen = () => {
  const { data, status } = useSelector((state) => getJournalsState(state));
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJournals())
  }, []);

  if(status === 'loading'){
    return <Loading />
  } 
  
  else {
    return (
      <View style={styles.container}>
        <ScrollView style={{ paddingHorizontal:16 }}>
          {data?.map((data, index) => (
            <JournalCard key={index} journalData={data} />
          ))}
        </ScrollView>
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

export default JournalsScreen;