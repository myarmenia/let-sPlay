import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {
    author: 'admin', // client
    id: Math.random(),
    text: 'Добро пожаловать в “Game Organising” пожалуйста пройдите регистрацию',
    date: new Date(),
  },
];

export const chatSlice = createSlice({
  name: 'chatbot',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const {addMessage} = chatSlice.actions;

export default chatSlice.reducer;
