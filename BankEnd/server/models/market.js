//extracting mongoose module
const mongoose = require("mongoose");

//Schema for reviews
const reviewSchema = new mongoose.Schema({
  raterID: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
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
  imageURL: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
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
  ownerId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
});

//exporting Market modal
module.exports = mongoose.module("Market", marketSchema);
