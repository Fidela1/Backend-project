
const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 4000;
const dbURL = process.env.DATABASE_URL || 'mongodb://0.0.0.0:27017/mydb';  

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

// Rest of your Express setup here
const app = express();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
