const { Schema, model } = require('mongoose');


// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Needs to be valid email"]
    },
    thoughts: [
      {
      type: Schema.Types.ObjectId,
      ref:"thought"
    }
  ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref:'user',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model('user', userSchema);

module.exports = User;
