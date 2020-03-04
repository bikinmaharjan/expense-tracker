const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const serveStatic = require('serve-static');
const path = require('path');

dotenv.config({ path: './config/config.env' });

const connectDB = require('./config/db');

connectDB();

const transactions = require('./routes/transaction');
const users = require('./routes/user');

const app = express();

app.use(cors());
app.use(express.json());

//Login and Register route
app.use('/api/v1', users);

//Front end routes
app.use('/', serveStatic(path.join(__dirname, '/dist')));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

//VerifyToken Middleware
const VerifyToken = require('./middleware/verifyToken');
app.use(VerifyToken);
//All the routes that need authentication goes down here
app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5500;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
