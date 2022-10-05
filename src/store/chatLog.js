import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {
    author: 'admin', // client
    id: Math.random(),
    text: 'Введите  адресс электронной почты',
    date: new Date(),
  },
];

export const chatSlice = createSlice({
  name: 'chatlog',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.push(action.payload);
    },
    addMessage2: (state) => {
        state=initialState
      },
  },
});

export const {addMessage,addMessage2} = chatSlice.actions;

export default chatSlice.reducer;
