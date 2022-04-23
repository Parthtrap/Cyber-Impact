//extracting the user modal
const { findOne } = require("../models/user");
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

  console.log("User added");
  console.log(newUser);
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
    res.status(500).json({ error: "Loggin in failed, please try again later" });
  }

  if (!existingUser) {
    console.log("No user exists with this email, please sign up");
    res
      .status(401)
      .json({ error: "No user exists with this email, please sign up" });
  }
  if (existingUser.password !== password) {
    console.log("Invalid credentials, could not log you in.");
    res
      .status(401)
      .json({ error: "Invalid credentials, could not log you in" });
  }

  console.log("User found");
  console.log(existingUser);
  res.status(201).json({
    message: "Logged in!",
    user: existingUser,
  });
};

const toggleAddFavMarket = async (req, res) => {
  const { userId, marketId } = req.body;

  let user;

  try {
    user = await User.findOne({ _id: userId });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }

  if (!user) {
    const err = "No user with this id exist";
    console.log(err);
    res.status(401).json({ error: err });
  }

  const existingMarket = user.favourites.find((mid) => {
    console.log(mid, marketId, mid === marketId);
    return mid === marketId;
  });
  console.log("Existing market id : ", existingMarket);

  if (existingMarket) {
    console.log("Market already in favourites");

    //removing market to user collections favuorites array
    try {
      const userFav = await User.updateOne(
        { _id: userId },
        {
          $pull: {
            favourites: marketId,
          },
        }
      );
      console.log("Market id removed from fav");
      console.log(userFav);
      try {
        user = await User.findOne({ _id: userId });
      } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: "Removed from fav", user: user });
      return;
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ error: err.message });
    }
  } else {
    //adding market to user collections favuorites array
    try {
      const userFav = await User.updateOne(
        { _id: userId },
        {
          $push: {
            favourites: marketId,
          },
        }
      );
      console.log("Market id added to fav");
      console.log(userFav);
      try {
        user = await User.findOne({ _id: userId });
      } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
      }
      //resending data with 'OK' status code
      res.status(201).json({ message: "Added to fav", user: user });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ error: err.message });
    }
  }
};

exports.toggleAddFavMarket = toggleAddFavMarket;
exports.signup = addUser;
exports.login = verifyUser;
