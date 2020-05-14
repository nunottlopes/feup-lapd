import React, { useEffect, useState } from 'react';

import {
  Text, Image, StyleSheet, Dimensions, StatusBar,
} from 'react-native';
import Background from '../components/Background';
import TripInfo from '../components/TripInfo';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const TripMain = ({navigation, route}) => {

  const { city, date } = route.params

  useEffect(() => {
    console.log("Trip page")
    console.log(city, date)
  }, []);

  return (
    <Background>
      {/* <StatusBar barStyle="light-content" backgroundColor="#7159c1" /> */}
      <TripInfo city="Porto" country="Portugal" date="12 - 16 Mar"/>
    </Background>
  )
};

export default TripMain;
