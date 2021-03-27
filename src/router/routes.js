import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Browse from '../pages/Browse';
import Profile from '../pages/Profile';
import Impact from '../pages/Impact';

const routes = [
	{
		Component: About,
		key: 'about',
		path: '/about'
	},
	{
		Component: Impact,
		key: 'impact',
		path: '/impact'
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
