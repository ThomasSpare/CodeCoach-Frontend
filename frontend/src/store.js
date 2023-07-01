import { configureStore, isAction } from '@reduxjs/toolkit';
import { useReducer } from './features/user';

export const store = configureStore({
    reducer: {
        user: useReducer,
    }, 
});

