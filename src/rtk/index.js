import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import programs from './ProgramsSlicer';



const reducers = combineReducers({programs:programs })
const store = configureStore({ reducer: reducers});

export default store;