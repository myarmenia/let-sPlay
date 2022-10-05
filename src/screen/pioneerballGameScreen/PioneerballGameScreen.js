import React from 'react';
import {StyleSheet, View,Text,TouchableOpacity} from 'react-native';
import PioneerballGameSvg from '../../assets/svg/PioneerballGameSvg'



const PioneerballGameScreen = ({}) => {
  return (
    <View style={styles.container}>
    <PioneerballGameSvg/>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
  },
 

});

export default PioneerballGameScreen;
