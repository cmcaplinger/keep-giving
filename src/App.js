import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar.js';
import About from './pages/About';
import Profile from './pages/Profile';
import Browse from './pages/Browse';
import Impact from './pages/Impact';
import './index.scss';

export default function App() {
	return (
    <div className="App">
		<div className="home-logo">
			<Link to={'/'}>		
				<h1>keep <br/> giving</h1>
			</Link>
		</div>
		<div class="bg"></div>
		<div class="bg bg2"></div>
		<div class="bg bg3"></div>
      <header className="App-header">
      </header>
			<Switch>
				<Route exact path="/" component={Home} />
        		<Route exact path="/about" component={About} />
				<Route exact path="/profile" component={Profile} />
				<Route exact path="/browse" component={Browse} />
				<Route exact path="/impact" component={Impact} />
			</Switch>
			<NavBar />
		</div>
	);
}