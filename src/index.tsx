import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app.component';

import HomePage from './pages/home.page';
import {
	createBrowserRouter,
	Link,
	Outlet,
	RouterProvider,
} from 'react-router-dom';
import AboutPage from './pages/about.page';
import Layout from './components/layout.component';
import UsersPage from './pages/users.page';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout, // Aşağıdaki pathler bu layout üzerinden ortak tasarımları alırlar. header,footer,menu,logo, profile, sepet kısayolu.
		children: [
			{
				path: '/',
				Component: HomePage,
			},
			{
				path: '/about',
				Component: AboutPage,
			},
		],
	},
	{
		path: '/admin',
		element: (
			<div>
				<h1>Admin Layout</h1>
				<Outlet />
			</div>
		),
		children: [{ path: 'users', Component: UsersPage }],
	},
	{
		path: '*',
		element: <>Sayfa Bulunamadı</>,
	}, // Her zaman en son değer bu olucak
]);

// bu kod blogu içerisinde RouterProvider dan başka kod bloğu olmasın.
root.render(
	<>
		<RouterProvider router={router} />
	</>
);
