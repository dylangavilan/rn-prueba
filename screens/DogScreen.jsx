import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { dogsBaseUrl } from '../config';
import Card from '../components/dogs/Card';
import { useGetData } from '../hooks/useGetData';
import Loading from '../components/Loading';

export default function DogScreen() {

  const { isLoading, data, error } = useGetData(dogsBaseUrl)
  
  if(isLoading) {
    return <Loading />
  }
  else {
    return (
      <>
        <Card imageUrl={data?.message} title='My dog' />
      </>
    )
  }
}
