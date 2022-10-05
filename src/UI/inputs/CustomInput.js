//Image Icon in React Native TextInput
//https://aboutreact.com/image-icon-with-react-native-textinput/
 
//import React in our code
import React from 'react';
import {useState} from 'react'
import InputIconSvg from '../../assets/svg/inputsSvg/InputIconSvg';
import InputArrowSvg from '../../assets/svg/inputsSvg/InputArrowSvg';
 
//import all the components we are going to use
import {SafeAreaView, StyleSheet, View, TextInput} from 'react-native';
 
const CustomInput = () => {
  const [letterSvg, setLetterSvg] = useState(true);
  const [arrowSvg, setArrowSvg] = useState(true)
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
          {letterSvg&&<InputIconSvg setLetterSvg={setLetterSvg}/>}
          <TextInput
            style={styles.input}
            placeholder="Input"
            underlineColorAndroid="transparent"
            placeholderTextColor={'#657AC5'}
          />
          <View style={{marginRight:20}}>
           {arrowSvg && <InputArrowSvg setArrowSvg={setArrowSvg}/>}
          </View>  
        </View>
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#142A5C',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 60,
    borderRadius: 12,
    paddingLeft:30
  },
 input:{
  flex: 1,
  fontSize:20,
  marginLeft:15
 }
});
 
export default CustomInput;