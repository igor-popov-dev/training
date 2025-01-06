import { lazy, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Error } from './pages/Error/Error';
import { Final } from './pages/Final/Final';
import { Main } from './pages/Main/Main';
import { store } from './store/store';

export const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />
		
	},
	{
		path: '/final',
		element: <Final />
		
	},
	// {
	// 	path: '/auth',
	// 	element: <AuthLayout />,
	// 	children: [
	// 		{
	// 			path: 'login',
	// 			element: <Login />
	// 		},
	// 		{
	// 			path: 'register',
	// 			element: <Register />
	// 		}
	// 	]
	// },
	{
		path: '*',
		element: <Error />
	}
]);
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
);
