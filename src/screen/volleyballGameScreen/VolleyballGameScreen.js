import React from 'react';
import {StyleSheet, View,Text,TouchableOpacity} from 'react-native';
import VolleyballGameSvg from '../../assets/svg/VolleyballGameSvg'



const VolleyballGameScreen = ({}) => {
  return (
    <View style={styles.container}>
     <VolleyballGameSvg/>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
  },
 

});

export default VolleyballGameScreen;
