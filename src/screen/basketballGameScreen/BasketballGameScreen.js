import React from 'react';
import {StyleSheet, View,Text,TouchableOpacity} from 'react-native';
import BasketballGameSvg from '../../assets/svg/BasketballGameSvg'



const BasketballGameScreen = ({}) => {
  return (
    <View style={styles.container}>
     <BasketballGameSvg/>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
  },
 

});

export default BasketballGameScreen;
