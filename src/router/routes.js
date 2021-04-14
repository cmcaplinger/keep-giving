import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Browse from '../pages/Browse';
import Success from '../pages/Success';

const routes = [
	{
		Component: About,
		key: 'about',
		path: '/about'
	},
	{
		Component: Success,
		key: 'success',
		path: '/success'
	},
	{
		Component: Browse,
		key: 'browse',
		path: '/browse'
	},
	{
		Component: Home,
		key: 'home',
		path: '/'
	}
];

export default routes;
