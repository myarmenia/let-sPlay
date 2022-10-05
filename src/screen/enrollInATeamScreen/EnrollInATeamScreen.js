import React from 'react';
import {Dimensions, StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import CreateGameSvg from '../../assets/svg/buttonsSvg/CreateGameSvg';
import TakePartGameButtonSvg from '../../assets/svg/buttonsSvg/TakePartGameButtonSvg'



const EnrollInATeamScreen = () => {
  return (
    <View style={styles.container}>
<TouchableOpacity style={{alignItems:'center', marginTop:300}}>
  <CreateGameSvg/>
</TouchableOpacity>
<TouchableOpacity style={{alignItems:'center', marginTop:20}}>
  <TakePartGameButtonSvg/>
</TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
    container:{
        // paddingTop:500
    }
});

export default EnrollInATeamScreen;


