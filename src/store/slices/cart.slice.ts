// useReducerdaki state değişikliklerini yöneteceğimiz dosya

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// CART_AddItem
// CART_deleteItem

export interface CartItem {
	id: number;
	quantity: number;
	name: string;
	price: number;
}

export interface Cart {
	items: CartItem[];
}

export type CartState = {
	cart: Cart;
	total: number;
};

// redux daki cart state initial değeri
const initState: CartState = {
	cart: { items: [] },
	total: 0,
};

const calculateTotal = (state: CartState) => {
	let total = 0;

	state.cart.items.forEach((item: CartItem) => {
		total += item.quantity * item.price;
	});

	state.total = total;
};

const cartSlice = createSlice({
	name: 'CART',
	initialState: initState,
	reducers: {
		addItem: (state: CartState, action: PayloadAction<CartItem>) => {
			// state yeni bir item ekleme
			state.cart.items.push(action.payload);
			calculateTotal(state);
			localStorage.setItem('cartState', JSON.stringify(state));
		},
		deleteItem: (state: CartState, action: PayloadAction<{ id: number }>) => {
			state.cart.items = state.cart.items.filter(
				(x) => x.id !== action.payload.id
			);
			calculateTotal(state);
			localStorage.setItem('cartState', JSON.stringify(state));
		},
		updateQuantity: (
			state: CartState,
			action: PayloadAction<{ id: number; quantity: number }>
		) => {
			const updatedItems = state.cart.items.map((item: CartItem) => {
				if (item.id === action.payload.id) {
					item.quantity = action.payload.quantity;
					return item;
				}

				return item;
			});

			// item referansı güncelle
			state.cart.items = [...updatedItems];
			calculateTotal(state);
			localStorage.setItem('cartState', JSON.stringify(state));
		},
		loadFromStorage: (state: CartState) => {
			const dataJsonString = localStorage.getItem('cartState');

			if (dataJsonString) {
				// jsonString JSON formatına deserizlize edilsin.

				console.log('dataJsonString', JSON.parse(dataJsonString));
				const data = JSON.parse(dataJsonString);
				state.cart = data.cart;
				state.total = data.total;
			}
		},
	},
});

// UI dan useDispatch methodu ile actionları tetikleyeceğiz
export const { addItem, deleteItem, updateQuantity, loadFromStorage } =
	cartSlice.actions;

// bunuda stora register etmemiz lazım.
export const cartReducers = cartSlice.reducer;
