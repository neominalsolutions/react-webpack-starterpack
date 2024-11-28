import { Container } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
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
