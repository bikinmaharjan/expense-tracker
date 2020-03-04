const express = require('express');
const router = express.Router();
const verifyToken = require('../controllers/validation/userValidation');
const {
  getTransactions,
  addTransaction,
  deleteTransaction
} = require('../controllers/transactions');
const jwt = require('jsonwebtoken');

router.use(function(req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
});

router
  .route('/')
  .get(getTransactions)
  .post(addTransaction);

router.route('/:id').delete(deleteTransaction);

module.exports = router;
