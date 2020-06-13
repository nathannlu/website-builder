import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/Navbar';
import DashNavbar from './components/dashboard/Navbar';
import Landing from './layout/Landing';
import Services from './layout/Services';
import Work from './layout/Work';
import Pricing from './layout/Pricing';
import About from './layout/About';

import Register from './layout/auth/Register';
import Login from './layout/auth/Login';
import Dashboard from './layout/dashboard/Dashboard';
import CreateRequest from './layout/dashboard/CreateRequest';
import Account from './layout/dashboard/Account';
import PrivateRoute from './components/routes/PrivateRoute';

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
				<div className="App">
					<Navbar />	
					<Route exact path="/" component={Landing} />
					<Route exact path="/services" component={Services} />
					<Route exact path="/work" component={Work} />
					<Route exact path="/pricing" component={Pricing} />
					<Route exact path="/about" component={About} />

					<Route exact path="/onboard" component={Register} />
					<Route exact path="/login" component={Login} />
					<DashNavbar />	
					<Switch>
						<PrivateRoute exact path="/dashboard" component={Dashboard} />
						<PrivateRoute exact path="/dashboard/create-request" component={CreateRequest} />
						<PrivateRoute exact path="/dashboard/account" component={Account} />
					</Switch>
				</div>
			</Router>
		</Provider>
  );
}

export default App;
