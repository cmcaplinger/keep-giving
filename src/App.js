import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
// import axios from "axios";

import Home from './pages/Home';
import NavBar from './components/NavBar/NavBar.js';
import About from './pages/About';
import Success from './pages/Success';
import Browse from './pages/Browse';
import './index.scss';

export default function App() {
	// const [state, setState] = useState({
	// 	email: "",
	// 	password: "",
	// 	isLoggedIn: false,
	//   });
	
	//   const [isLoggedIn, setIsLoggedIn] = useState(false);
	
	//   useEffect(() => {
	// 	if (localStorage.token) {
	// 	  setIsLoggedIn(true);
	// 	} else {
	// 	  setIsLoggedIn(false);
	// 	}
	//   }, [isLoggedIn]);
	
	//   const handleLogOut = () => {
	// 	setState({
	// 	  email: "",
	// 	  password: "",
	// 	  isLoggedIn: false,
	// 	});
	// 	localStorage.clear();
	//   };
	
	//   const handleInput = (event) => {
	// 	setState({ ...state, [event.target.name]: event.target.value });
	//   };
	
	//   const handleSignUp = async (event) => {
	// 	event.preventDefault();
	// 	try {
	// 	  const response = await axios.post("http://localhost:3001/", {
	// 		email: state.email,
	// 		password: state.password,
	// 	  });
	// 	  console.log(response);
	// 	  localStorage.setItem('token', response.data.token);
	// 	  setIsLoggedIn(true);
	// 	} catch (err) {
	// 	  console.log(err);
	// 	}
	//   };
	return (
    <div className="App">
		<div class="bg"></div>
		<div class="bg bg2"></div>
		<div class="bg bg3"></div>
		<div className="home-logo">
			<Link to={'/'}>		
				<h1>keep <br/> giving</h1>
			</Link>
		</div>
      <header className="App-header">
      </header>
			<Switch>
				<Route exact path="/" component={Home} />
        		<Route exact path="/about" component={About} />
				<Route exact path="/success" component={Success} />
				<Route exact path="/browse" component={Browse} />
			</Switch>
			<NavBar />
		</div>
	);
}