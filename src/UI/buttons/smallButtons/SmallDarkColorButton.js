import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SmallDarkColorButtonSvg from '../../../assets/svg/buttonsSvg/SmallDarkColorButtonSvg'

const SmallDarkColorButton = ({
  textBtn,
  fontSize = 20,
}) => {
  return (
    <TouchableOpacity>  
    <SmallDarkColorButtonSvg/>
    <View style={{width:144, height:37, alignItems:'center', justifyContent:'center', position:'absolute' }}>
      <Text style={[styles.text, {fontSize: fontSize}]}>{textBtn}</Text>
    </View>   
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 30,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  text: {
    color: '#FFFFFF',
    fontSize:15,
    fontWeight:'bold'
  },
});

export default SmallDarkColorButton;
