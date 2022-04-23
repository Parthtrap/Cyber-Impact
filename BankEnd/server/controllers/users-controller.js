//extracting the user modal
const User = require("../models/user");

//post signin request function
const addUser = async (req, res, next) => {
  //destructuring and storing requested data
  const { name, email, password } = req.body;

  //finding existing user with same email;
  let existingUserEmail;
  try {
    existingUserEmail = await User.findOne({ email: email });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }

  //checking existing userEmail
  if (existingUserEmail) {
    console.log("A user with this email already exists");
    console.log(existingUserEmail);
    res.status(422).json({ error: "A user with this email already exists" });
  }

  //finding existing user with same username;
  let existingUserName;
  try {
    existingUserName = await User.findOne({ username: name });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }

  //checking existing username
  if (existingUserName) {
    console.log("A user with this username already exists");
    console.log(existingUserName);
    res.status(422).json({ error: "A user with this username already exists" });
  }

  //creating newUser object
  const newUser = new User({
    username: name,
    email,
    password,
    favourites: [],
    markets: [],
  });

  //add newUser to database
  try {
    await newUser.save();
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }

  //resending data with 'OK' status code
  res.status(201).json({ user: newUser });
  // res.status(201).json({user : newUser.toObject({ getters: true})})     // toObject() is method in moongoose
};

//post login request function
const verifyUser = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error : "Loggin in failed, please try again later"});
  }

  if (!existingUser){
    console.log('No user exists with this email, please sign up');
    res.status(401).json({ error : 'No user exists with this email, please sign up'});
  }
  if(existingUser.password !== password) {
    console.log('Invalid credentials, could not log you in.');
    res.status(401).json({ error : 'Invalid credentials, could not log you in'});
  }


  res.status(201).json({
    message: 'Logged in!',
    user: existingUser
  });

};

exports.signup = addUser;
exports.login = verifyUser;
