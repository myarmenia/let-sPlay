import React from 'react';
import {StyleSheet, View,Text,TouchableOpacity} from 'react-native';
import NotificationSvg from '../../assets/svg/notificationSvg/NotificationSvg';
import PickerSvg from '../../assets/svg/PickerSvg';
import PlayerDataSvg from '../../assets/svg/PlayerDataSvg';
import MessageSvg from '../../assets/svg/MassageSvg';
import BottomProfileIconSvg from '../../assets/svg/BottomProfileIconSvg';
import AddSvg from '../../assets/svg/AddSvg'



const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <PickerSvg/>
        <NotificationSvg/>
    </View>
    <View style={{alignItems:'center', marginTop:100}}>
        <PlayerDataSvg/>
    </View>
    <TouchableOpacity onPress={()=>{
      navigation.navigate('PlayTeamTournamentScreen')
    }} style={{alignItems:'center', position:'relative', top:55}}>
        <AddSvg/>
    </TouchableOpacity>
    <View style={styles.bottom}>
        <MessageSvg/>
        <BottomProfileIconSvg/>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header:{
    width:'100%', 
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between', 
    paddingHorizontal:20, 
    marginTop:20
  },
  bottom:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between', 
    paddingHorizontal:50, 
    paddingVertical:15,
    marginTop:30
  }
});

export default ProfileScreen;
