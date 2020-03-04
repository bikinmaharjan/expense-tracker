const User = require('../models/User');

//@desc: POST register
//@route: /api/v1/register
//@access: Public
exports.register = async (req, res, next) => {
  return res.send('Register route');
};

//@desc: POST register
//@route: /api/v1/login
//@access: Public
exports.login = async (req, res, next) => {
  return res.send('Login route');
};
