
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root-reducer';

import persistStore from 'redux-persist/es/persistStore';


export const store = configureStore({
    reducer: rootReducer
})

export const persistor = persistStore(store)
console.log(store)



// const createStore = (reducer, initialStore) => {
//     const startStore = reducer(initialStore);
//     return startStore;
// }