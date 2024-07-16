import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
	return (
		<>
			<header>
				<h1>Banner</h1>
				<nav>
					<Link to="/">Anasayfa</Link>
					<br></br>
					<Link to="/about">About Page</Link>
					<br></br>
					<Link to="/admin/users">Users</Link>
				</nav>
			</header>
			<hr></hr>

			<main>
				<Outlet />
			</main>
			<hr></hr>

			<footer>Alt Bilgi</footer>
		</>
	);
}

export default Layout;
