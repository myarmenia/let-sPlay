import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import {useEffect} from 'react';
import React from 'react';
import {ActivityIndicator, Dimensions, StyleSheet, View} from 'react-native';

const SplashScreen = ({navigation}) => {
//   useEffect(() => {
//     setTimeout(() => {
//       navigation.replace('welcome');
//     }, 500);
//   }, [navigation]);
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00ADA6',
    minHeight: Dimensions.get('window').height - 100,
    height: '100%',
    justifyContent: 'center',
  },
});

export default SplashScreen;


