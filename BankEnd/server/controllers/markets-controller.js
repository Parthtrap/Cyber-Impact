//extracting the market modal
const req = require("express/lib/request");
const Market = require("../models/market");
const User = require("../models/user");

//post newMarketProfile request function
const addMarket = async (req, res) => {
  //destructuring and storing requested data
  const {
    title,
    phonenum,
    address,
    lat,
    lng,
    openingTime,
    closingTime,
    profession,
    ownerId,
  } = req.body;

  //finding existing market with same  name and owner;
  let existingMarket;
  try {
    existingMarket = await Market.findOne({
      title: title,
      ownerId: ownerId,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }

  //checking existing market
  if (existingMarket) {
    console.log(
      "This user already owns a market with this name. Choose a different name"
    );
    res.status(422).json({
      error:
        "This user already owns a market with this name. Choose a different name",
    });
  }

  //creating new market
  const newMarket = new Market({
    title: title,
    phonenum: phonenum,
    imageURL: null,
    address: address,
    location: {
      lat: lat,
      lng: lng,
    },
    description: null,
    rating: 0,
    reviews: [],
    openingTime: openingTime,
    closingTime: closingTime,
    profession: profession,
    ownerId: ownerId,
  });

  //add newMarket to database
  try {
    await newMarket.save();
    console.log("Market added");
    console.log(newMarket);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }

  let user;

  //adding market to user collections market array
  try {
    user = await User.updateOne(
      { _id: ownerId },
      {
        $push: {
          markets: newMarket._id,
        },
      }
    );
    console.log("Market id added to user");
    console.log(user);

    try {
      user = await User.findOne({ _id: ownerId });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }

    //resending data with 'OK' status code
    res.status(201).json({ market: newMarket, user: user });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
};

//funstion to find all markets of a user
const getUserMarkets = async (req, res) => {
  const ownerId = req.params.uid;
  console.log(ownerId);
  console.log(typeof ownerId);

  let userMarkets;
  try {
    userMarkets = await Market.find({ ownerId: ownerId });
    console.log(userMarkets);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
    return;
  }

  if (!userMarkets) {
    console.log("User have no market registered");
    res.status(401).json({ error: "User have no market registered" });
    return;
  }

  console.log("All Markets of the user found");
  console.log(userMarkets);
  res.status(201).json({ UserMarkets: userMarkets });
};

//function to find market with specific id
const getMarket = async (req, res) => {
  const marketId = req.params.mid;
  console.log(marketId);

  let market;
  try {
    market = await Market.findOne({ _id: marketId });
    console.log(market);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }

  if (!market) {
    console.log("No market found with this id");
    res.status(401).json({ error: "No market found with this id" });
  }

  console.log("Market with this id found");
  console.log(market);
  res.status(201).json({ market: market });
};

//funstion to delete market with specific id
const deleteMarket = async (req, res) => {
  const marketId = req.params.mid;

  let market;
  let user;
  let marketForOwner;
  try {
    marketForOwner = await Market.findOne({ _id: marketId });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }

  const ownerId = marketForOwner.ownerId;

  try {
    market = await Market.deleteOne({ _id: marketId });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }

  if (!market) {
    console.log("No market found with this id");
    res.status(401).json({ error: "No market found with this id" });
    return;
  }

  //deleting market to user collections market and favourites array
  try {
    user = await User.updateOne(
      { _id: ownerId },
      {
        $pull: {
          markets: marketForOwner._id,
          favourites: marketForOwner._id,
        },
      }
    );
    console.log("Market id added to user");
    console.log(user);

    try {
      user = await User.findOne({ _id: ownerId });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }

    console.log("Market with this id found and deleted");
    console.log(market);

    res.status(201).json({ message: "deleted", market: market, user: user });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
};

//funstion to find filtered markets for a filter query
const getFilteredMarkets = async (req, res) => {
  const { profession, filter } = req.body;

  let filteredMarkets;

  //if no profession selected
  if (!profession) {
    //and filter with rating
    if (filter === "Rating") {
      try {
        filteredMarkets = await Market.find({}).sort({ rating: -1 }).limit(30);
        console.log("Got Data");
      } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
      }

      res.status(201).json({ filteredMarkets: filteredMarkets });
    }

    //when filtered with distance
    // if(filter === "Distance"){

    // }
  }

  //if profession is selected
  //and rating is also selected
  if (filter === "Rating") {
    try {
      filteredMarkets = await Market.find({ profession: profession }).sort({
        rating: -1,
      });
      console.log("Got Data");
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ error: err.message });
    }

    res.status(201).json({ filteredMarkets: filteredMarkets });
  }

  //with distance
  // try {} catch(err){};
};


//funstion to find searched markets for a filter query
const getSearchedMarkets = async (req, res) => {
  const {word} = req.body;

  let filteredMarkets;

  try {
    var regex = new RegExp(word, "i");

    filteredMarkets = await Market.find({ title : regex }).sort({
      rating: -1,
    });
    console.log("Got Data");
    res.status(201).json({ filteredMarkets: filteredMarkets });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }

  //if no profession selected
  // if (!profession) {
  //   //and filter with rating
  //   if (filter === "Rating") {
  //     try {
  //       filteredMarkets = await Market.find({}).sort({ rating: -1 }).limit(30);
  //       console.log("Got Data");
  //     } catch (err) {
  //       console.log(err.message);
  //       res.status(500).json({ error: err.message });
  //     }

  //     res.status(201).json({ filteredMarkets: filteredMarkets });
  //   }

  //   //when filtered with distance
  //   // if(filter === "Distance"){

  //   // }
  // }

  // //if profession is selected
  // //and rating is also selected
  // if (filter === "Rating") {
  //   try {
  //     filteredMarkets = await Market.find({ profession: profession }).sort({
  //       rating: -1,
  //     });
  //     console.log("Got Data");
  //   } catch (err) {
  //     console.log(err.message);
  //     res.status(500).json({ error: err.message });
  //   }

  //   res.status(201).json({ filteredMarkets: filteredMarkets });
  // }

  //with distance
  // try {} catch(err){};
};

exports.getSearchedMarkets = getSearchedMarkets;
exports.getFilteredMarkets = getFilteredMarkets;
exports.deleteMarket = deleteMarket;
exports.getMarket = getMarket;
exports.addMarket = addMarket;
exports.getUserMarkets = getUserMarkets;
