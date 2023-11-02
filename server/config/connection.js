const mongoose = require('mongoose');

// Load environment variables from a .env file during development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Connect to MongoDB using the MONGODB_URI environment variable
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose.connection;
