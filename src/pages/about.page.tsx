import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AboutPage() {
	const navigate = useNavigate();

	// Uygulama dışında harici bir sayfaya yönlenecek ise www.google.com o zaman Link kullanımı yapamayız bunun yerine href tercih etmemiz gerekir.

	// kayıt sonrası ts dosyasından kontrollü bir yönlendirme yapmak için useNavigate Hook kullanılır.
	const navigateToPage = () => {
		const ok = window.confirm('Sayfadan ayrılmak istediğinize emin misiniz?');
		if (ok) {
			navigate('/');
		}
	};

	return (
		<>
			<h1>About Page</h1>
			<nav>
				<Link to="/">Home Page</Link>
				<br></br>
				<a href="/">Home Page With A Href</a>
				<br></br>
				<button onClick={navigateToPage}>Navigation With Button</button>
			</nav>
		</>
	);
}

export default AboutPage;
