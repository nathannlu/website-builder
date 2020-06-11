import React from 'react';
import axios from 'axios';

const App = () => {
	axios.get('/api/users/').then(res => console.log(res));
  
	return (
    <div className="App">
			Hi this is home
		</div>
  );
}

export default App;
