import React from 'react'; 
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'; 
import ReactDOM from 'react-dom';

// Global Redux state management
import { Provider } from 'react-redux';
import store from './store';

// FontAwesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

// Routes
import Signup from './components/Signup';
import SignupSuccess from './components/Signup/Success';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Pages from './components/Pages';
import Builder from './components/Builder';
import PrivateRoute from './components/routes/PrivateRoute';
import Published from './components/Published';
import FirstProject from './components/FirstProject';

// JWT handler
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

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
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

library.add(faEye, faEyeSlash)

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

						<Route exact path="/signup" component={Signup} />
						<Route path="/signup/success/" component={SignupSuccess} />
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
