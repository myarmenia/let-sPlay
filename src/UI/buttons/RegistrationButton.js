import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RegistrationButtonSvg from '../../assets/svg/buttonsSvg/RegistrationButtonSvg'

const RegistrationButton = ({
  textBtn,
  goTo,
  fontSize = 20,
}) => {
  return (
    <TouchableOpacity onPress={goTo}>  
    <RegistrationButtonSvg/>
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
    color: '#001034',
    fontSize:15,
    fontWeight:'bold'
  },
});

export default RegistrationButton;
