import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import {
	addItem,
	CartItem,
	deleteItem,
	updateQuantity,
} from '../store/slices/cart.slice';

// ürünleri state eklemek için kullanılan component
const ProductList: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	// productState şuan bu kısımda Redux üzerinde oluşması lazım.
	const productState = useSelector((store: RootState) => store.productState);

	// const plist = [
	// 	{ id: 1, name: 'ürün-1', price: 15 },
	// 	{ id: 2, name: 'ürün-2', price: 25 },
	// 	{ id: 3, name: 'ürün-3', price: 100 },
	// 	{ id: 4, name: 'ürün-4', price: 125 },
	// 	{ id: 5, name: 'ürün-5', price: 180 },
	// ];

	return (
		<>
			{productState.products.map((item: any) => {
				return (
					<div key={item.id}>
						<div>
							{item.name} / {item.price}
						</div>
						<div>
							<button
								onClick={() => {
									dispatch(addItem({ ...item, quantity: 1 }));
								}}
							>
								Sepete Ekle
							</button>
						</div>
					</div>
				);
			})}
		</>
	);
};

// state üzerinden çalışır.
const CartList: React.FC = () => {
	const cartState = useSelector((store: RootState) => store.cartState);
	const dispatch = useDispatch<AppDispatch>();
	return (
		<>
			{cartState.cart && (
				<div>
					{cartState.cart.items.map((item: CartItem) => {
						return (
							<div key={item.id}>
								<div>
									{item.name} x {item.quantity} adet{' '}
								</div>
								<button
									onClick={() => {
										dispatch(deleteItem({ id: item.id }));
									}}
								>
									Sepetten Sil
								</button>
								<input
									type="number"
									value={item.quantity}
									onChange={(e: any) => {
										dispatch(
											updateQuantity({
												id: item.id,
												quantity: Number(e.target.value),
											})
										);
									}}
								/>
							</div>
						);
					})}
				</div>
			)}
		</>
	);
};

function ReduxSamplePage() {
	// state değiştireceğimiz hook

	const cartState = useSelector((store: RootState) => store.cartState);

	return (
		<>
			<ProductList />
			<hr></hr>
			<CartList />

			<hr></hr>
			<div>Toplam Tutar: {cartState.total}</div>
		</>
	);
}

export default ReduxSamplePage;
