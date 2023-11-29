const mongoose = require('mongoose');
const express = require('express');

const PORT = process.env.PORT || 4000;


mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
.then (() =>{
  console.log('Connected to the dadatabase!')
})

