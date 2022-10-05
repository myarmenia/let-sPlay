import React from 'react';
import {useState} from 'react';
import {Dimensions, StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import LoginButton from '../../UI/buttons/LoginButton';
import RegistrationButton from '../../UI/buttons/RegistrationButton';
import RegistrationItem from '../../UI/RegistrationItem';
import LoginItem from '../../UI/LoginItem';



const MainScreen = () => {
    const [openRegPage, setOpenRegPage] = useState(false)
    const [openLoginPage, setOpenLoginPage] = useState(false)
    const [closeItem, setCloseItem] = useState(true)

  return (
    <View style={styles.container}>
{closeItem&&<View setCloseItem={setCloseItem} style={{marginTop:580}}>
<View style={{width:230, height:77, backgroundColor:'#44A5BA', paddingHorizontal:20, paddingTop:15,borderBottomRightRadius:10,borderTopRightRadius:10,borderTopLeftRadius:10, marginLeft:15}}>
<Text style={{fontSize:12, color:'#FFFFFF'}}>
    Добро пожаловать в “Game Organising” пожалуйста пройдите регистрацию 
</Text>
</View>
    <View style={{flexDirection:'row', alignItems:'center',
    marginHorizontal:15, justifyContent:'space-between',
    marginTop:30}}>
    <View style={{marginRight:15}}>
        <LoginButton goTo={()=>{
            setOpenLoginPage(true)
            setCloseItem(false)
        }}/> 
    </View>
        <RegistrationButton goTo={()=>{
            setOpenRegPage(true)
            setCloseItem(false)
        }}/>
    </View> 
    </View>}

        {openRegPage&&<RegistrationItem setOpenRegPage={setOpenRegPage}/>}
        {openLoginPage&&<LoginItem setOpenLoginPage = {setOpenLoginPage}/>}
    
        </View>
  );
};

const styles = StyleSheet.create({
    container:{
        // paddingTop:500
    }
});

export default MainScreen;


