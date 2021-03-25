import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Browse from '../pages/Browse';
import Profile from '../pages/Profile';

const routes = [
	{
		Component: About,
		key: 'about',
		path: '/about'
	},
	{
		Component: Profile,
		key: 'profile',
		path: '/profile'
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
