import React from 'react';
import {StyleSheet, View,Text,TouchableOpacity} from 'react-native';
import ProfileImageSvg from '../../assets/svg/ProfileImageSvg'



const GalleryScreen = ({}) => {
  return (
      <View>
      {/* <View>
        <ProfileImageSvg/>
      </View> */}
    <View style={styles.container}>
       <View style={styles.parent}>
           <View style={{width:170, height:120, backgroundColor:'#1A2848'}}>

           </View>
           <View style={styles.child}>

           </View>
       </View>
       <View style={styles.parent}>
           <View style={{width:170, height:120, backgroundColor:'#1A2848'}}>

           </View>
           <View style={styles.child}>

           </View>
       </View>
       <View style={styles.parent}>
           <View style={{width:170, height:120, backgroundColor:'#1A2848'}}>

           </View>
           <View style={styles.child}>

           </View>
       </View>
       <View style={styles.parent}>
           <View style={{width:170, height:120, backgroundColor:'#1A2848'}}>

           </View>
           <View style={styles.child}>

           </View>
       </View>
       <View style={styles.parent}>
           <View style={{width:170, height:120, backgroundColor:'#1A2848'}}>

           </View>
           <View style={styles.child}>

           </View>
       </View>
    </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
  },
  parent:{
    marginTop:15,
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20
  },
  child:{
    width:170, 
    height:120, 
    backgroundColor:'#1A2848'
  }

});

export default GalleryScreen;
