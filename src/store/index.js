import {configureStore, combineReducers} from '@reduxjs/toolkit';
import nameReducer from './slice';
import chatReducer from './chatReg';
import loginReducer from './chatLog'

const rootReducers = combineReducers({
  auth: nameReducer,
  chatbot: chatReducer,
  chatlog: loginReducer,
});



export const store = configureStore({
  reducer: rootReducers,
});

export default store;
