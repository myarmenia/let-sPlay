import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LoginButtonSvg from '../../assets/svg/buttonsSvg/LoginButtonSvg'

const LoginButton = ({
  textBtn,
  fontSize = 20,
  goTo
}) => {
  return (
    <TouchableOpacity   
    onPress={goTo}>
    <LoginButtonSvg/>
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

export default LoginButton;
