import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SmallLightColorButtonSvg from '../../../assets/svg/buttonsSvg/SmallLightColorButtonSvg'

const SmallLightColorButton = ({
  textBtn,
  fontSize = 20,
}) => {
  return (
    <TouchableOpacity>  
    <SmallLightColorButtonSvg/>
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
    color: '#001034',
    fontSize:15,
    fontWeight:'bold'
  },
});

export default SmallLightColorButton;
