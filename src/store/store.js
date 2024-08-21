/*no user import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Import the root reducer

const store = configureStore({
  reducer: rootReducer,
});

export default store;no user */



import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './reducers'; // Your combined reducers

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Only persist the auth reducer (you can add more)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
