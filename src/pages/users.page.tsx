import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { User } from '../models/user.model';
import { getUser, saveUser } from '../services/user.service';

type State = {
	users: User[];
};

function UsersPage() {
	const [state, setState] = useState<State>({ users: [] });

	// axios async await formatı
	const loadDataAsync = async () => {
		try {
			const response = await getUser();
			setState({ ...state, users: response.data });
		} catch (error) {}
	};

	useEffect(() => {
		loadDataAsync();
		// axios
		// 	.get<User[]>('https://jsonplaceholder.typicode.com/users')
		// 	.then((response) => {
		// 		// axios response değerlerini response.data ile verir.
		// 		console.log('response', response.data);
		// 		setState({ ...state, users: response.data });
		// 	})
		// 	.catch((err: AxiosError) => {
		// 		console.log('err', err);
		// 	});
	}, []);

	// Promise Then Catch formatı
	// birden fazla component içinde getUser kullanabilirim.
	// getUser()
	// 	.then((response) => {
	// 		setState({ ...state, users: response.data });
	// 	})
	// 	.catch((err) => {
	// 		console.log('err', err);
	// 	});

	return (
		<>
			<h1>Sistemdeki Kullanıcılar</h1>
			{state.users && (
				<ul>
					{state.users.map((item, index) => {
						return <li key={item.id}>{item.name}</li>;
					})}
				</ul>
			)}
		</>
	);
}

export default UsersPage;
