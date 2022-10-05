import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BigDarkColorButtonSvg from '../../../assets/svg/buttonsSvg/BigDarkColorButtonSvg'

const BigDarkColorButton = ({
  textBtn,
  fontSize = 20,
}) => {
  return (
    <TouchableOpacity>  
    <BigDarkColorButtonSvg/>
    <View style={{width:266, height:48, alignItems:'center', justifyContent:'center', position:'absolute' }}>
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
    color: '#7DCE8A',
    fontSize:15,
    fontWeight:'bold'
  },
});

export default BigDarkColorButton;
