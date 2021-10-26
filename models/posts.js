const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let postSchema = new Schema(
  {
    user: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

let Post = mongoose.model("post", postSchema);

module.exports = Post;
