import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer
} from 'redux-persist'// to remove
import FilesystemStorage from 'redux-persist-filesystem-storage'
// import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './rootReducer'

const rootPersistConfig = {
  version: 0,
  key: 'root',
  storage: FilesystemStorage,
  whitelist: [],
  blacklist: [
    // This reducers have specific persist configuration.
    // so they are blacklisted.
  ]
}

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    // https://github.com/reduxjs/redux-toolkit/issues/415
    immutableCheck: false,
    serializableCheck: false
  })
})

const persistor = persistStore(store)

export default {
  store,
  persistor
}
