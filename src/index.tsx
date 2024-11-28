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
import UseReducerPage from './pages/use.reducer.page';
import UseContextPage from './pages/use.context.page';
import { ThemeProvider } from './contexts/theme.context';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [
			{ path: 'forms', Component: FormSamplePage },
			{ path: 'useReducer', Component: UseReducerPage },
			{ path: 'contextApi', Component: UseContextPage },
		],
	},
]);

// bu kod blogu içerisinde RouterProvider dan başka kod bloğu olmasın.
// tüm sayfa componentlerini ve bu sayfa componentleri içerisinde child componentleri ThemeProvider ile sarmallamış olduk
root.render(
	<>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</>
);
