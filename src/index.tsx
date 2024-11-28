import React from 'react';
import ReactDOM from 'react-dom/client';

import {
	createBrowserRouter,
	Link,
	Outlet,
	RouterProvider,
} from 'react-router-dom';
import Layout from './components/layout.component';
import FormSamplePage from './pages/form.sample.page';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [{ path: 'forms', Component: FormSamplePage }],
	},
]);

// bu kod blogu içerisinde RouterProvider dan başka kod bloğu olmasın.
root.render(
	<>
		<RouterProvider router={router} />
	</>
);
