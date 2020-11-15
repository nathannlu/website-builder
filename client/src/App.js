import React from 'react'; 
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'; 

import PrivateRoute from './components/atoms/PrivateRoute';

// Authenticate Routes
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import ForgotPassword from './components/pages/Login/ForgotPassword';
import Reset from './components/pages/Login/Reset';

/*
import Pages from './components/Pages'; 
import Published from './components/Published'; 
import FirstProject from './components/FirstProject';
*/

// Dashboard Routes
import Dashboard from './components/pages/Dashboard';
import NewSite from './components/pages/Dashboard/New';
import Welcome from './components/pages/Dashboard/Welcome';

// Website Builder Routes
import Builder from './components/pages/Builder'; 


// Global Redux state management
import { Provider } from 'react-redux';
import store from './store';

// FontAwesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faCheck, faEye, faEyeSlash, faTimes, faPlus, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

// JWT handler
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser, authenticate } from './actions/authActions';

// Stripe initialization
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe("pk_test_51GtOMjKmTCfCxz2BBWOhjP3REOf3Gx5TUDzYkZ9x6qfURvmWKA0nXt6bnBIFeu9t462hJ9HjcevUkGsGKfP4GNnl00fz8xbmGM");

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
	setAuthToken(token);

	// Decode token and get user info and exp
	const decoded = jwt_decode(token);

	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));

	// Confirm token exist in database
	store.dispatch(authenticate(token, isVerified => {
		if(!isVerified) {
			// If user does not exist
			// remove JWT token
			console.log('User does not exist. Removing token.');
			store.dispatch(logoutUser());	
		}
	}));

	// Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser());
		// Redirect to login
		window.location.href = "./login";
	}
}

// Fontawesome regular icons
library.add(faCheckCircle, faEdit, faTrashAlt)

// Fontawesome solid icons
library.add(faCheck, faEye, faEyeSlash, faTimes, faPlus, faArrowDown, faArrowUp)

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Switch>	
					{/*
					<Route path="/dashboard">	
						<div className="dashboard">
						<Switch>
							<PrivateRoute exact path="/dashboard/:title" component={Pages} />
							<PrivateRoute exact path="/dashboard/:title/:pageName" component={Builder} />
						</Switch>
						</div>
					</Route>
					*/}
	
					<Route exact path="/">
						<Redirect to="/login" />
					</Route>

					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/login/forgot" component={ForgotPassword} />
					<Route  path="/login/reset" component={Reset} />

					<PrivateRoute exact path="/dashboard" component={Dashboard} />
					<PrivateRoute exact path="/dashboard/welcome" component={Welcome} />
					<PrivateRoute exact path="/dashboard/sites/new" component={NewSite} />


					<PrivateRoute exact path="/builder/:title/:pageName" component={Builder} />

					{/*
					<Route exact path="/published/:title/:pageName" component={Published} />
					*/}
				</Switch>
			</Router>
		</Provider>
  );
}

export default App;
