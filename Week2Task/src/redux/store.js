import {combineReducers, configureStore} from '@reduxjs/toolkit';
import reducers from './features/reducers';
import {persistReducer, persistStore} from 'redux-persist';
import reduxStorage from './storage';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import {itemApi} from './apis/itemApi';

let rootReducers = combineReducers(reducers);

let persistConfig = {key: 'root', storage: reduxStorage};
let persistedReducer = persistReducer(persistConfig, rootReducers);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware, itemApi.middleware),
});

sagaMiddleware.run(rootSaga);

export const persistentStore = persistStore(store);
