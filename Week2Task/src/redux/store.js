import {combineReducers, configureStore} from '@reduxjs/toolkit';
import reducers from './features/reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

let rootReducers = combineReducers(reducers);

let persistConfig = {key: 'root', storage: AsyncStorage};
let persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistentStore = persistStore(store);
