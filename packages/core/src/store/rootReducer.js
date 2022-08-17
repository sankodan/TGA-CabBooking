import { combineReducers } from '@reduxjs/toolkit'
import {
  persistReducer
} from 'redux-persist'
// import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage'
// import FilesystemStorage from 'redux-persist-filesystem-storage';
import user from './slices/user'

// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
// stateReconciler: autoMergeLevel2,
// const migrations = {
//   1: (previousState) => {
//     // migration to keep only device state
//     return {
//       ...previousState,
//       testId: undefined
//     }
//   }
// }
//  migrate: createMigrate(migrations, { debug: false }),

const userPersistConfig = {
  version: 0,
  key: 'user',
  storage: EncryptedStorage
}

// add all slices here
const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, user)
})

export default rootReducer
