const express = require('express');
const app = express();
const mongoose = require('mongoose');

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
app.get('/', (req, res) => {
	res.send('hi');
});

app.listen(5000, () => {
	console.log('Server started');
});


