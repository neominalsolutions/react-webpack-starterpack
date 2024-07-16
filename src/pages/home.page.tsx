import React from 'react';
import { Link } from 'react-router-dom';
// / anasayfa path bu component doma yüklenecek <div id="root"> </div>

function HomePage() {
	return (
		<>
			<h1>Home Page</h1>
			<nav>
				<Link to="/about">Hakkımızda</Link>
			</nav>
		</>
	);
}

export default HomePage;
