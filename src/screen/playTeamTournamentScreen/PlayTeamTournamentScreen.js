import React from 'react';
import {StyleSheet, View,Text,TouchableOpacity} from 'react-native';
import PlaySvg from '../../assets/svg/PlaySvg';
import TeamSvg from '../../assets/svg/TeamSvg';
import TournamentSvg from '../../assets/svg/TournamentSvg'



const PlayTeamTournament = ({}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={{alignItems:'center', marginTop:30}}>
              <PlaySvg/>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center', marginTop:20}}>
              <TeamSvg/>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center', marginTop:20}}>
              <TournamentSvg/>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

});

export default PlayTeamTournament;
