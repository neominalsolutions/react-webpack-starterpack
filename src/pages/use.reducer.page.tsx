import React, { useReducer, useState } from 'react';
import { CounterReducer } from '../reducers/counter.reducer';

function UseReducerPage() {
	// karmaşık local state güncelleme logiclerini type bazlı ayrı bir reducer dosyası üzerinden yönetmemizi sağlayan bir local state yönetim mekanizması

	const [state, dispatch] = useReducer(CounterReducer, {
		age: 42,
		employeed: true,
	});

	// const [incrementAge, setIncrementAge] = useState<number>(42);
	// const [unemployeed, setUnemployeed] = useState<any>(65);

	return (
		<>
			<button
				onClick={() => {
					dispatch({ type: 'incremented_age' });
					// setIncrementAge(incrementAge + 1);
				}}
			>
				Increment age
			</button>

			<button
				onClick={() => {
					dispatch({ type: 'unemployeed', payload: 65 });
					// setUnemployeed(65);
				}}
			>
				Unemployeed
			</button>

			<p>Hello! You are {state.age}.</p>
		</>
	);
}

export default UseReducerPage;
