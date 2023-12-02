const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes/index')

const port = process.env.PORT || 3080;
const dbURL = process.env.DATABASE_URL || 'mongodb://0.0.0.0:27017/mydb';  

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

const app = express();

app.use(express.json());
app.use('/api/v1', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
