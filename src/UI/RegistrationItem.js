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
import {addMessage} from '../store/chatReg';
import {useSelector, useDispatch} from 'react-redux';

const RegistrationItem = () => {
  const messages = useSelector(state => state.chatbot);
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
        text: 'Напишите имя и фамилию',
      }));
    } else if (messages.length===4){
      dispatch( addMessage({
        author: 'admin',
        id: Math.random(),
        text: 'Укажите адрес электронной почты',
      }));
    } else if (messages.length===6){
      dispatch( addMessage({
        author: 'admin',
        id: Math.random(),
        text: 'Напишите номер телефона',
      }));
    }else if (messages.length===8){
      dispatch( addMessage({
        author: 'admin',
        id: Math.random(),
        text: 'Создайте пароль',
      }));
    }
    else if (messages.length===10){
      dispatch( addMessage({
        author: 'admin',
        id: Math.random(),
        text: 'Подтвердите пароль',
      }));
    }
  });

  return (
    <View style={{position: 'relative', padding: 15}}>
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

export default RegistrationItem;
