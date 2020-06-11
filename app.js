const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');

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

app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static("client/build"));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(process.env.PORT || 5000, () => {
	console.log('Server started');
});


