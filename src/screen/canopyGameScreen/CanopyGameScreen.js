import React from 'react';
import {StyleSheet, View,Text,TouchableOpacity} from 'react-native';
import CanopyGameSvg from '../../assets/svg/CanopyGameSvg'



const CanopyGameScreen = ({}) => {
  return (
    <View style={styles.container}>
      <CanopyGameSvg/>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
  },
 

});

export default CanopyGameScreen;
