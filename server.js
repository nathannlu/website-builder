const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const userRoutes = require('./routes/userRoutes');
const requestRoutes = require('./routes/requestRoutes');

const app = express();

app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());

const database = 'mongodb+srv://nathan:CanFISHfly%3F@cluster0-tsbpc.mongodb.net/design?retryWrites=true&w=majority'
mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(
  async connection => {
    console.log('Database loaded and connected.')
  }
)

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Routes
app.use('/api/users', userRoutes);
app.use('/api/requests', requestRoutes);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static("client/build"));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log('Server started');
});


