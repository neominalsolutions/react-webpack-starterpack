// 1. aşama

import { configureStore } from '@reduxjs/toolkit';
import { cartReducers } from './slices/cart.slice';

export const store = configureStore({
	reducer: {
		cartState: cartReducers, // cartStatelerden cartReducer sorumlu olsun
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
