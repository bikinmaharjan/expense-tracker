const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');

dotenv.config({ path: './config/config.env' });

const connectDB = require('./config/db');

connectDB();

const transactions = require('./routes/transaction');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/transactions', transactions);
app.get('/', (req, res) => {
  res.send('Api for expense tracker');
});

const PORT = process.env.PORT || 5500;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
