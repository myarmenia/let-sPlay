import React from 'react';
import {Dimensions, StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import ActiveGamesSvg from '../../assets/svg/buttonsSvg/ActiveGamesSvg';
import BoardGamesSvg from '../../assets/svg/buttonsSvg/BoardGamesSvg'



const OrganizeGameScreen = () => {
  return (
    <View style={styles.container}>
<TouchableOpacity style={{alignItems:'center', marginTop:300}}>
    <ActiveGamesSvg/>
</TouchableOpacity>
<TouchableOpacity style={{alignItems:'center', marginTop:20}}>
    <BoardGamesSvg/>
</TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
    container:{
        // paddingTop:500
    }
});

export default OrganizeGameScreen;


