import axios from 'axios';

export interface Product {
	id: number;
	name: string;
	price: number;
	quantity: number;
}

export const getProducts = async () => {
	try {
		const response = await axios.get(
			'https://services.odata.org/northwind/northwind.svc/Products?$format=json&$select=ProductName,UnitPrice,UnitsInStock,ProductID'
		);

		console.log('data', response.data);

		const data = response.data.value.map((item: any) => {
			return {
				id: item.ProductID,
				name: item.ProductName,
				price: item.UnitPrice,
				quantity: 1,
			};
		}) as Product[];

		return data;
	} catch (error) {
		return Promise.reject(error);
	}
};
