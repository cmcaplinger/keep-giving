import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar.js';
import About from './pages/About';

export default function App() {
	return (
    <div className="App">
      <header className="App-header">
      </header>
			<Switch>
				<Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
			</Switch>
			<NavBar />
		</div>
	);
}