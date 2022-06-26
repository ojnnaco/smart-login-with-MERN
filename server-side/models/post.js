// CREATING A SCHEMA USING MONGOOSE

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema; //same as mongoose.Schema.ObjectID

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true, //help removes empty spaces in the beginning
      min: 3,
      max: 200,
      required: true, //anytime you want to create a post, if the title is not provided,it will throw an error.
    },
    slug: {
      type: String,
      unique: true,
      index: true,
      lowercase: true,
    },
    content: {
      type: {},
      required: true,
      min: 20,
      max: 200000,
    },
    user: {
      type: String,
      default: "Admin",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Post", postSchema);
//we export so we can use it whenever we need to in our controller
