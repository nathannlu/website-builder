import React from 'react'; import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'; import jwt_decode from 'jwt-decode';
import ReactDOM from 'react-dom';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

import Onboard from './components/Onboarding';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Pages from './components/Pages';
import Builder from './components/Builder';
import PrivateRoute from './components/routes/PrivateRoute';
import Published from './components/Published';
import FirstProject from './components/FirstProject';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
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
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

const App = () => {
	return (
		<Provider store={store}>
			<Router>
					<Switch>	

				{/*
						<Route path="/dashboard">	
							<div className="dashboard">
							<Switch>
								<PrivateRoute exact path="/dashboard" component={Dashboard} />
								<PrivateRoute exact path="/dashboard/:title" component={Pages} />
								<PrivateRoute exact path="/dashboard/:title/:pageName" component={Builder} />
							</Switch>
							</div>
						</Route>
						*/}
		
						<Route exact path="/">
							<Redirect to="/login" />
						</Route>

						<Route exact path="/onboard" component={Onboard} />
						<Route exact path="/login" component={Login} />

						{/*
						<Route exact path="/published/:title/:pageName" component={Published} />
						*/}
					</Switch>
			</Router>
		</Provider>
  );
}

export default App;
