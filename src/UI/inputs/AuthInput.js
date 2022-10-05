//import React in our code
import React from 'react';

//import all the components we are going to use
import {SafeAreaView, StyleSheet, View, TextInput} from 'react-native';

const AuthInput = ({onChangeText, value, name, type}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
          <TextInput
            onChangeText={onChangeText}
            style={styles.input}
            placeholder="Написать"
            underlineColorAndroid="transparent"
            placeholderTextColor={'#657AC5'}
            type={type}
            name={name}
          />
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
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#142A5C',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 50,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
    color: '#657AC5',
  },
});

export default AuthInput;
