//extracting mongoose module
const mongoose = require("mongoose");

//Schema for reviews
const reviewSchema = new mongoose.Schema({
  raterID: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    maxlength: 500,
  },
});

//Schema for markets
const marketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  phonenum: {
    type: Number,
    required: true,
  },
  imageURL: { type: String },
  address: { type: String, required: true },
  location: {
    lat: { type: Number },
    lng: { type: Number },
  },
  description: { type: String },
  rating: {
    type: Number,
  },
  reviews: [reviewSchema],
  openingTime: {
    type: String,
    required: true,
  },
  closingTime: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  ownerId: { type: String, required: true },
});

//exporting Market modal
module.exports = mongoose.model("Market", marketSchema);
