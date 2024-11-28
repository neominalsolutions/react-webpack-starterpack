import axios from 'axios';
import React, { useState } from 'react';
import useSWR, { Fetcher } from 'swr';

const fetcher: Fetcher<any, string> = async (url: string) =>
	(await axios.get(url)).data;

function SwrSamplePage() {
	const [id, setId] = useState<number>(1);

	const { data, isLoading, error } = useSWR(
		`https://jsonplaceholder.typicode.com/users/${id}`,
		fetcher
		// { refreshInterval: 3000 }
	);

	console.log('data', data);

	if (isLoading) return <>Yükleniyor</>;

	if (error) return <>Veri çekilemedi</>;

	if (data)
		return (
			<>
				Veri Adeti: {data.name}
				<button
					onClick={() => {
						setId(Math.round(Math.random() * 10));
					}}
				>
					Change Id : {id}
				</button>
			</>
		);

	return <></>;
}

export default SwrSamplePage;
