import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/Navbar';
import Landing from './screens/Landing';
import Services from './screens/Services';
import Work from './screens/Work';
import Pricing from './screens/Pricing';
import About from './screens/About';

import Register from './screens/Register';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
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
					{/*<Navbar />*/}	
					<Route exact path="/" component={Landing} />
					<Route exact path="/services" component={Services} />
					<Route exact path="/work" component={Work} />
					<Route exact path="/pricing" component={Pricing} />
					<Route exact path="/about" component={About} />

					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
					<Switch>
						<Route exact path="/dashboard" component={Dashboard} />
					</Switch>
				</div>
			</Router>
		</Provider>
  );
}

export default App;
