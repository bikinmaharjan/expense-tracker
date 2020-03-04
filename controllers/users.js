const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
  registerValidation,
  loginValidation
} = require('../controllers/validation/userValidation');

//@desc: POST register
//@route: /api/v1/register
//@access: Public
exports.register = async (req, res, next) => {
  //Validate Data
  const { error } = registerValidation.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //Check if the User is already in the database
  const emailExist = await User.findOne({
    email: req.body.email
  });

  if (emailExist) {
    return res.status(400).send('Email already exists');
  }

  //Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });

  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
};

//@desc: POST register
//@route: /api/v1/login
//@access: Public
exports.login = async (req, res, next) => {
  //Validate Data
  const { error } = loginValidation.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //Check if emailExist for validation
  const user = await User.findOne({
    email: req.body.email
  });

  if (!user) {
    return res.status(400).send(`Email doesn't exist`);
  }

  //Check if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send(`Invalid password`);
  }

  //Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);
};
