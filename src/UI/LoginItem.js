import React from 'react';
import {useState,useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import AuthInput from '../UI/inputs/AuthInput';
import InputArrowSvg from '../assets/svg/inputsSvg/InputArrowSvg';
import {addMessage,addMessage2} from '../store/chatLog';
import {useSelector, useDispatch} from 'react-redux';
import LoginButton from '../UI/buttons/LoginButton';
import LoginVkButton from './buttons/LoginVkButton';

const LoginItem = () => {
 const [closePart, setClosePart] = useState(true)
 const [loginPart, setLoginPart] = useState(false)
 const messages = useSelector(state => state.chatlog);
 const dispatch = useDispatch();
 const [message, setMessage] = useState('');

 const getContainerStyles = author => {
   return author === 'admin' ? styles.leftContainer : styles.rightContainer;
 };
 const getMessageStyles = author => {
   return author === 'admin' ? styles.leftMessage : styles.rightMessage;
 };


 useEffect(() => {
   if(messages.length===2) {
     dispatch( addMessage({
       author: 'admin',
       id: Math.random(),
       text: 'Введите  пароль',
     }));
   }else if(messages.length===4){
    dispatch( addMessage({
        author: 'admin',
        id: Math.random(),
        text: 'Введенный адрес электронной почты или пароль не верен. Укажите данные заново.',
      })); 
   }else if(messages.length===6){
    dispatch( addMessage2()); 
   }
 });
  return (
    <View style={styles.container}>
{closePart&&<View setClosePart={setClosePart} style={{marginTop:560}}>
<View style={{width:230, height:100, backgroundColor:'#44A5BA', paddingHorizontal:20, paddingTop:15,borderBottomRightRadius:10,borderTopRightRadius:10,borderTopLeftRadius:10, marginLeft:15, paddingBottom:15}}>
<Text style={{fontSize:12, color:'#FFFFFF'}}>
    Осуществите вход в приложение. Для входа в «Играем?» вы можете воспользоваться своей стр ВК, или вести данные логина и пароля в приложении.
</Text>
</View>
    <View style={{flexDirection:'row', alignItems:'center',
    marginHorizontal:15, justifyContent:'space-between',
    marginTop:26}}>
    <View style={{marginRight:15}}>
        <LoginButton goTo={() => {
            setClosePart(false)
            setLoginPart(true)
        }}/> 
    </View>
        <LoginVkButton/>
    </View> 
    </View>}




    {loginPart&&<View setLoginPart={setLoginPart} style={{position: 'relative', padding: 15}}>
      {messages.map((item, index) => (
        <View
          key={index}
          style={[styles.messageContainer, getContainerStyles(item.author)]}>
          <View style={[styles.message, getMessageStyles(item.author)]}>
            <Text style={{fontSize: 14, color: '#FFFFFF'}}>{item.text}</Text>
          </View>
        </View>
      ))}

      <KeyboardAvoidingView
        style={{position: 'absolute', left: 0, right: 0, bottom: 0}}
        behavior="position">
        <View style={{marginHorizontal: 15}}>
          <AuthInput
            name="message"
            type="text"
            value={message}
            onChangeText={text => setMessage(text)}
          />
        </View>
        </KeyboardAvoidingView>

        <TouchableOpacity
        style={{marginLeft:330}}
          onPress={() =>
            dispatch(
              addMessage({
                author: 'client',
                id: Math.random(),
                text: message,
                date: new Date(),
              }),
            )
          }>
          <InputArrowSvg />
        </TouchableOpacity>
      


    </View>}




    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  leftContainer: {
    justifyContent: 'flex-start',
  },
  rightContainer: {
    justifyContent: 'flex-end',
  },
  message: {
    // width: '60%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  rightMessage: {
    backgroundColor: '#657AC5',
    borderBottomLeftRadius: 10,
    paddingHorizontal:25,
    paddingVertical:10
  },
  leftMessage: {
    backgroundColor: '#44A5BA',
    borderBottomRightRadius: 10,
    paddingHorizontal:13,
    paddingVertical:10
  },
  text: {
    color: 'red',
    fontSize: 15,
  },
});

export default LoginItem;
