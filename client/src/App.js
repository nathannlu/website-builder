import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Register from './screens/Register';
import Login from './screens/Login';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					{/* Navbar goes here */}
					<Route exact path="/" component={Register} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
				</div>
			</Router>
		</Provider>
  );
}

export default App;
