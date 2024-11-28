import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { AppDispatch } from '../store/store';
import { loadFromStorage } from '../store/slices/cart.slice';

function Layout() {
	const dispatch = useDispatch<AppDispatch>();

	// uygulama ilk ayağa kalktığında git localstoragedan client state yükle
	useEffect(() => {
		dispatch(loadFromStorage());
	}, []);

	return (
		<>
			<header>
				<h1>Başlık</h1>
				<nav>
					<Link to="/forms">Forms</Link>
					<br></br>
					<Link to="/useReducer">Use Reducer</Link>
					<br></br>
					<Link to="/contextApi">Context API</Link>
					<br></br>
					<Link to="/swr">SWR</Link>
					<br></br>
					<Link to="/redux">Redux</Link>
				</nav>
			</header>
			<hr></hr>

			<Container maxWidth="sm">
				<Outlet />
			</Container>

			<hr></hr>

			<footer>Alt Bilgi</footer>
		</>
	);
}

export default Layout;
